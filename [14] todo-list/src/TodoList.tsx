import { ChangeEvent, useState } from "react"

export default function TodoList() {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState("")

    const newTaskChange = (e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)

    const addTask = () => {
        const task = newTask.trim()
        if (!task) return

        setTasks(t => [...t, task])
        setNewTask("")
    }

    const deleteTask = (index: number) => setTasks(t => t.filter((_, i) => index !== i))

    const moveTaskUp = (index: number) => {
        if (index < 1 || tasks.length < 2) return

        setTasks(t => {
            const updatedTasks = [...t]
            ;[updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]]
            return updatedTasks
        })
    }

    const moveTaskDown = (index: number) => {
        if (index >= tasks.length - 1 || tasks.length < 2) return

        setTasks(t => {
            const updatedTasks = [...t]
            ;[updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            return updatedTasks
        })
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={newTaskChange} />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}
