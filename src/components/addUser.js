import { useState } from "react";
import { useAuth } from "../context/authContext";

function AddUser () {
    const [name,setName] = useState("")
    const { addUser } = useAuth()

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            Add user
            <input value={name} onChange={handleChange} />
            <button onClick={() => addUser(name)}>Add user</button>
        </div>
    )
}

export default AddUser;