import { useState } from "react"

const BatchUpdate = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)

    const handler = () => {
        setCount(120)
        setName("Mohammad")
        setAge(30)
    }
    return (
        <div>
            This is batch update
            <button onClick={handler}>Batch update</button>
            <div>
                States:
               count: {count}
               name: {name}
               age: {age}
            </div>
        </div>
    )
}
export default BatchUpdate