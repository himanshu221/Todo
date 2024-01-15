import { useState } from "react"

export function Button({title}){
    let [state, setState] = useState("Mark as Complete");

    return <button onClick={() => {
        console.log(title)
        console.log(typeof title)

        fetch('http://localhost:3000/completed',{
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title
            })
        })
        setState("Completed")
    }}>{state}</button>
}