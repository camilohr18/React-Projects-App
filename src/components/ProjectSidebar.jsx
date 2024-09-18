import { useState } from "react";
import Button from "./Button";

const ProjectSidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}) => {

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl hidden lg:block">
                <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
                <div>
                    <Button onClick={onStartAddProject}>+ Add Project</Button>
                </div>
                <ul className="mt-8">
                    {projects.map(singleProject => {
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                        if(singleProject.id === selectedProjectId) {
                            cssClasses+= " bg-stone-800 text-stone-200"
                        }else {
                            cssClasses+= " text-stone-400"
                        }

                    return(
                    <li key={singleProject.id}>
                        <button 
                        className={cssClasses}
                        onClick={() => onSelectProject(singleProject.id)}
                        >
                            {singleProject.title}
                        </button>
                    </li>
                    )}
                )}
                </ul>
            </aside>


            <header className="lg:hidden p-4 bg-stone-900">
                <div className="flex justify-between align-middle min-h-[2rem]">
                <h2 className="font-bold uppercase md:text-md text-white my-auto">Your Projects</h2>
                <button onClick={() =>setOpenMenu(!openMenu)}>
                    {openMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>     
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
                </div>
                <div>
                {openMenu && (
                    <div className="mt-4 ms-4">
                    <Button onClick={()=>{
                        onStartAddProject();
                        setOpenMenu(!openMenu)
                        }}>+ Add Project</Button>
                    <ul className="mt-2">
                    {projects.map(singleProject => {
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                        if(singleProject.id === selectedProjectId) {
                            cssClasses+= " bg-stone-800 text-stone-200"
                        }else {
                            cssClasses+= " text-stone-400"
                        }

                    return(
                    <li key={singleProject.id}>
                        <button 
                        className={cssClasses}
                        onClick={() => {
                            onSelectProject(singleProject.id)
                            setOpenMenu(!openMenu)
                        }}
                        >
                            {singleProject.title}
                        </button>
                    </li>
                    )}
                )}
                </ul>
                </div>
                )}
                </div>
            </header>
        </>
    )
}

export default ProjectSidebar;