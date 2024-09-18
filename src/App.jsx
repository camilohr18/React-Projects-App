import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSetected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectSelected from "./components/ProjectSelected";


function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleAddTask = (text) => {
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text,
        id: taskId,
        projectId: prevState.selectedProjectId,
        completed: false
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    }); 
  }

  const handleCompletedTask = (id) => {
    setProjectState(prevState => {
      const toUpdateTask = prevState.tasks.filter((task) => task.id === id)
      toUpdateTask[0].completed = true;
      const unUpdatedTasks = prevState.tasks.filter((task) => task.id !== id)

      return{
        ...prevState,
        tasks: [...unUpdatedTasks, ...toUpdateTask ]
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    }); 
  }

  const handleAddProject = (projectData) => {
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleSelectedProject = (id) =>{
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    }); 
  }

  const handleDeleteProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    }); 
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let tastByProject = projectState.tasks.filter((tasks) => projectState.selectedProjectId === tasks.projectId)

  let content = <ProjectSelected 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask} 
    tasks={tastByProject}
    onCompletedTask={handleCompletedTask}
    />
  if (projectState.selectedProjectId === null) {
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSetected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen lg:my-8 lg:flex gap-8 mt-0">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectedProject}/>
      {content}
    </main>
    
  );
}

export default App;
