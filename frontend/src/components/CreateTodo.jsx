import { useState } from "react"


export function CreateTodo(props) {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    return (
        <>
            <input type="text" placeholder="Title" onChange={(e) => {
                console.log(`Title : ${e.target.value}`);
                setTitle(e.target.value);
            }}/>
            <input type="text" placeholder="Description" onChange={(e) => {
                console.log(`Desc : ${e.target.value}`);
                setDesc(e.target.value);
            }}/>
            <button onClick={() => {
                fetch('http://localhost:3000/todos',{
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        description: desc
                    })
                })
                props.setTodos([...props.todos,{
                    title: title,
                    description: desc,
                    completed: false
                }])
            }}>Add Todo</button>
        </>
    )
}
