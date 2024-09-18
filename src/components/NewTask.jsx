import { useState } from "react";

const NewTask = ({onAdd}) => {

    const [enteresTask, setEnteredTask] =useState()

    const handleChange = (event) => {
        setEnteredTask(event.target.value)
    }

    const handleClick = () => {
        onAdd(enteresTask)
        setEnteredTask('')
    }

    return(
        <div className="flex items-center gap-4">
            <input type="text" className="w-2/3 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteresTask}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )

}

export default NewTask;