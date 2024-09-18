
import Button from "./Button";
import DoughnutChart from "./DoughnutChat";
import Tasks from "./Tasks";

const ProjectSelected = ({project, onDelete, onAddTask, onDeleteTask, tasks, onCompletedTask}) => {

    const formatedDate = new Date(project.due).toLocaleDateString('en-US', {year:'numeric',month: 'short', day: 'numeric'})

    return(
        <div className="w-full">
            <div className="mt-16 md:w-full lg:w-full pe-4 ps-4 lg:ps-0">
                <header className="pb-4 mb-4 border-b-2 border-stone-300 w-full pe-4 ps-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2 capitalize">{project.title}</h1>
                        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-700 text-white hover:bg-red-600 hover:text-stone-100 capitalize" onClick={onDelete}>Delete</button>
                    </div>
                </header>
                <div className="lg:flex gap-4">
                    <div className="lg:w-[40rem]">
                        <p className="mb-4 text-stone-400">Due Date: {formatedDate}</p>
                        <p className="mb-4 text-stone-600 whitespace-pre-wrap">{project.desc}</p>
                        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} onComplete={onCompletedTask}/>
                    </div>
                    <div className="lg:w-[25rem] w-full mt-16 md:w-full">
                        <h2 className="text-2xl font-bold text-stone-700 mb-4">Progress</h2>
                        <div>
                            {tasks.length === 0 ? (
                                <p>There are not information about tasks completed.</p>
                            ):(
                                <DoughnutChart tasks={tasks}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSelected;