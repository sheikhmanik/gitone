import { useContext } from "react";
import Context from "../store/Context";

export default function Task() {

    const { tasks, failed, completed } = useContext(Context);

    function handleRemoveToComplete(id) {
        const selectedTaskIndex = tasks.findIndex(task => task.id === id)
        const selectedTask = tasks[selectedTaskIndex]
        completed.push(selectedTask)
        return completed;
    }

    function handleRemoveToFailed(id) {
        const selectedTaskIndex = tasks.findIndex(task => task.id === id)
        const selectedTask = tasks[selectedTaskIndex]
        failed.push(selectedTask)
        return failed;
    }
    
    return (
        <ul className="space-y-5 bg-gray-700 rounded-lg p-5">
            {tasks.length === 0 && <p className="bg-gray-700">No task added..</p>}
            {tasks.map((task, index) => (
                <li key={index} className="flex justify-between border-b bg-gray-700">
                    <div className="flex flex-col">
                        <h1 className="bg-gray-700">{task.name}</h1>
                        <p className="bg-gray-700">{task.description}</p>
                    </div>
                    <div className="bg-gray-700 flex gap-3">
                        <button
                            className="text-xs text-green-500 underline"
                            onClick={() => handleRemoveToComplete(task.id)}
                        >Marked as completed</button>
                        <button
                            className="text-xs text-red-500 underline"
                            onClick={() => handleRemoveToFailed(task.id)}
                        >Marked as failed</button>
                    </div>
                </li>)
            )}
        </ul>
    )
}
