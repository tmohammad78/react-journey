import React, { useReducer } from "react"

const TasksContext = React.createContext()
const TasksDispatch = React.createContext()

const useTasks = () => {
    const context = React.useContext(TasksContext)
    if(context === undefined) {
        throw new Error("useTasks should called inner of <tasksProvider />")
    }
    return context
}


const useTasksDispatch = () => {
    const context = React.useContext(TasksDispatch)
    if(context === undefined) {
        throw new Error("useTasks should called inner of <TasksDispatch />")
    }
    return context
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
]
const reducers = (tasks,action) => {
    switch(action.type) {
        case 'added': {
            return [...tasks, {
              id: action.id,
              text: action.text,
              done: false
            }];
          }
          case 'changed': {
            return tasks.map(t => {
              if (t.id === action.task.id) {
                return action.task;
              } else {
                return t;
              }
            });
          }
          case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
          }
        default: {
            throw Error('Unknown action: ' + action.type);
        }     
    }
}

const TasksProvider = ({ children }) => {
    const [tasks,dispatch] = useReducer(reducers,initialTasks)

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatch.Provider value={dispatch}>
                {children}
            </TasksDispatch.Provider>
        </TasksContext.Provider>
    )
}

export { TasksProvider , useTasks, useTasksDispatch }