import React from 'react'
import { DELETE_IMG } from '../utills/constants'

const Task = ({ task, index, handleCheckChange, handleDeleteTask }) => {

    return (
        <div>
            <div className='mx-1 my-2 flex justify-between'>
                <label className='text-lg'>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        className='my-2 mr-2 h-4'
                        onChange={handleCheckChange}
                        name={task.title}
                    />
                    {task.title}
                </label>
                <button
                    className=''
                ><img
                        src={DELETE_IMG}
                        alt=""
                        className='h-7 rounded-full'
                        onClick={()=>handleDeleteTask(index)}
                    /></button>
            </div>
        </div>
    )
}

export default Task