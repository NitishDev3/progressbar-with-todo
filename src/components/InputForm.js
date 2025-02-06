import React, { useRef, useState } from 'react'

const InputForm = ({ setIsInputActive, selectedDate, setData, data }) => {

    const [titleInput, setTitleInput] = useState("");


    const handleSubmitClick = () => {
        setIsInputActive(false);

        setData((prev) => {
            const selectedData = prev.find(p => p.date === selectedDate);

            if (selectedData) {
                const updatedTasks = [
                    ...selectedData.tasks,
                    {
                        title: titleInput,
                        completed: false
                    }
                ];

                const newState = prev.map((p) =>
                    p.date === selectedDate
                        ? { ...p, tasks: updatedTasks }
                        : p
                );

                return newState;
            }

            else {
                const newData = {
                    date: selectedDate,
                    tasks: [
                        {
                            title: titleInput,
                            completed: false
                        }
                    ]
                };
                return [...prev, newData];
            }
        });

    };

    return (
        <div className='h-[250px] w-[400px] bg-orange-400 left-0 right-0 absolute mx-auto opacity-95 rounded-lg'>
            <div className='flex justify-center my-3'>
                <h1 className='font-medium text-lg' >Add Todo Task</h1>
            </div>
            <div className='flex justify-center my-6 '>
                <div>
                    <label className='text-lg'>Title </label>
                    <input type="text" placeholder='Enter the title' className='rounded-md p-2'
                        onChange={(e) => { setTitleInput(e.target.value) }}
                    />
                </div>
            </div>
            <div className='flex justify-center m-12'>
                <button
                    className='border border-black p-1 bg-green-400 rounded-md mx-1'
                    onClick={(e) => { handleSubmitClick() }}
                >Submit</button>
                <button
                    className='border border-black p-1 bg-red-500 rounded-sm mx-1'
                    onClick={() => { setIsInputActive(false) }}
                >Cancel</button>
            </div>
        </div>
    )
}

export default InputForm