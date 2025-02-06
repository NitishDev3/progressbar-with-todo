import React, { useState } from 'react'
import Task from './Task';
import InputForm from './InputForm';

const CheckBox = ({ data, setData, selectedDate }) => {

  const tasksData = data.filter((d) => (d.date === selectedDate));
  const [isInputActive, setIsInputActive] = useState(false);


  const handleAddTodoClick = () => {
    setIsInputActive(true)
  }

  const handleCheckChange = (e) => {
    setData((prev) => {
      const selectedData = prev.find(p => p.date === selectedDate);
      const selectedTask = selectedData.tasks.find(t => t.title === e.target.name);

      if (selectedTask) {
        const updatedTask = {
          ...selectedTask,
          completed: !selectedTask.completed
        }

        const updatedTasks = selectedData.tasks.map(t =>
          t.title === e.target.name ? updatedTask : t
        );

        const newState = prev.map((p) =>
          p.date === selectedDate
            ? { ...p, tasks: updatedTasks }
            : p
        );

        return newState;
      }

      return prev;
    });
  };

  const handleDeleteAllClick = () => {
    setData((prev) => {

      const selectedData = prev.find(p => p.date === selectedDate);

      if (selectedData) {

        const newState = prev.map((p) =>
          p.date === selectedDate
            ? { ...p, tasks: [] }
            : p
        );

        return newState;
      }

      return prev;
    });
  };


  const handleDeleteTask = (index) => {

    setData((prev) => {

      const selectedData = prev.find(p => p.date === selectedDate);

      if (selectedData) {

        const updatedTasks = [
          ...selectedData.tasks.slice(0, index),
          ...selectedData.tasks.slice(index + 1)
        ];

        const newState = prev.map((p) =>
          p.date === selectedDate
            ? { ...p, tasks: updatedTasks }
            : p
        );

        return newState;
      }

      return prev;
    });

  }

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-4xl px-4 py-6'>
        <div className='flex justify-center'>
          <h3 className='text-2xl font-medium underline sm:text-xl md:text-2xl lg:text-3xl my-6'>
            Todo Tasks
          </h3>
        </div>

        {isInputActive && (
          <InputForm
            setIsInputActive={setIsInputActive}
            setData={setData}
            selectedDate={selectedDate}
            data={data}
          />
        )}

        <div className='flex justify-center'>
          <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3'>
            {tasksData.length > 0 ? (
              tasksData[0].tasks.map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  task={task}
                  handleCheckChange={handleCheckChange}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <></>
            )}

            <div className="flex justify-between mt-4">
              <button
                className='p-2 my-3 mx-1 border-2 border-black rounded-md bg-green-400 text-sm sm:text-base'
                onClick={handleAddTodoClick}
              >
                Add A Todo
              </button>
              <button
                className='p-2 my-3 mx-1 border-2 border-black rounded-md bg-red-400 text-sm sm:text-base'
                onClick={handleDeleteAllClick}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CheckBox