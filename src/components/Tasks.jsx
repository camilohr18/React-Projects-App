import NewTask from "./NewTask";

const Tasks = ({onAdd, onDelete, tasks, onComplete}) => {
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length===0 && (
                <p className="text-stone-800 my-4">This project does not have any tasks yet</p>
            )}
            {tasks.length>0 && (
                <ul className="mt-8 rounded-md bg-stone-100">
                    {tasks.map((task)=>(
                        <li key={task.id} className={task.completed ? ("flex justify-between my-4 p-4 bg-green-400") : ("flex justify-between my-4 p-4")} >
                            <span className="w-2/3">{task.text}</span>
                            {!task.completed && (
                                <button className="text-stone-700 hover:text-green-400" onClick={() => onComplete(task.id)}>Complete</button>
                            )}
                            <button 
                                className={task.completed ? ("text-stone-500") : ("text-stone-700 hover:text-red-500")} disabled={task.completed}
                                onClick={() => onDelete(task.id)}>
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Tasks;