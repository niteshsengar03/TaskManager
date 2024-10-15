import { useState } from "react";

function AddTask({taskList,setTaskList}) {
  const [addModal, setaddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function addTask(e){
    // e.preventDefault();
    setTaskList([...taskList,{projectName,taskDescription}]);
    setaddModal(false);
  }
  console.log(taskList);
  return (
    <>
      <button
        onClick={() => setaddModal(true)}
        className="bg-blue-600 text-white uppercase text-sm font-semibold py-1 mx-1.5 px-2 pr-2. 5 rounded"
      >
        New
      </button>
      {addModal == true ? (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl">
        <div className="flex flex-col p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Add New Task</h3>
            <button
              className="text-gray-400 hover:text-gray-600 text-2xl font-semibold"
              onClick={() => setaddModal(false)}
            >
              X
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
                PROJECT NAME
              </label>
              <input
                id="project-name"
                type="text"
                placeholder="Project name"
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1">
                TASK DESCRIPTION
              </label>
              <textarea
                id="task-description"
                type="text"
                placeholder="Task description"
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex justify-end ">
              <button onClick={addTask}
                type="submit"
                className="mt-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD TASK
              </button>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
        </>
      ) : null}
    </>
  );
}
export default AddTask;
