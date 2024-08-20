import AddTask from "../components/addTask"
import { Switch } from "../components/switch"
import TaskList from "../components/taskList"
import TestComponent from "../components/testComponent"
import { AuthProvider } from "../context/authContext"
import { TasksProvider } from "../context/taskContext"
import { ToggleProvider, useToggle } from "../context/toggleContext"


function ToggleButton({...props}) {
    const {on, toggle} = useToggle()
    return <Switch on={on} onClick={toggle} {...props} />
}

function ToggleText(){
    const {on } = useToggle()
    return on ? "this is on" : "this is off"
}
const ContextComp = () => {
    return (
        <div className="wrapper">
            <div>
                This is Context Page
            </div>
            <div className="wrapper">
                <div>1. Context counter</div>
                <ToggleProvider>
                    <ToggleText />
                    <ToggleButton />
                </ToggleProvider>
            </div>
            <div className="wrapper">
                <div>2. Auth Context</div>
                <AuthProvider>
                    this is Auth
                    <TestComponent />
                </AuthProvider>
            </div>
            <div>
                <div>3. Task Dispatch</div>
                <TasksProvider>
                    <h1>Day off in Kyoto</h1>
                    <AddTask />
                    <TaskList />
                </TasksProvider>
            </div>
        </div>
    )
}

export default ContextComp