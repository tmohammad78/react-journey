import { useAuth } from "../context/authContext";

function Profile() {
    const { user } = useAuth()
    return (
        <div>
            This is Profile for {user}
        </div>
    )
}

export default Profile;