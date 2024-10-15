import { useState } from "react"
import AddTask from "./components/AddTask"


function App() {
  const [taskList,setTaskList] = useState([]);

  return (
    <>
    <h1 className="text-2xl font-bold py-4 pl-6">The Task Tracker</h1>
    <div className="flex flex-row items-center">
    <p className="text-xl pl-6">Click</p>
    <AddTask taskList = {taskList} setTaskList={setTaskList}/>
    <p className="text-xl my-2">to add a new task</p>
    </div>
    <div>
      {taskList.map(task=>{
        return <h2>{task.projectName}+" "+{task.taskDescription} </h2>
      })}
    </div>
    </>
  )
}

export default App
