import React, { useEffect, useState } from 'react'
import CheckBox from './CheckBox'
import ProgressBar from './ProgressBar'
import { todayDate } from '../utills/constants'

const ProgressApp = () => {

  const [selectedDate, setSelectedDate] = useState(todayDate)

  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  const totalNumTasks = data.filter((d) => (d.date === selectedDate))[0]?.tasks?.length;
  const completedNumTasks = data.filter((d) => (d.date === selectedDate))[0]?.tasks.filter((t) => t.completed === true).length;

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-4xl px-4 py-6'>
        <div className='flex justify-center'>
          <h1 className='font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl my-6'>
            Daily Habit Tracker
          </h1>
        </div>
        <div className='mb-4'>
          <label className='block text-lg'>Date : </label>
          <input
            type="date"
            value={selectedDate}
            className='border border-black rounded px-4 py-2 w-full sm:w-auto'
            onChange={(e) => { setSelectedDate(e.target.value) }}
          />
        </div>
        <ProgressBar totalNumTasks={totalNumTasks} completedNumTasks={completedNumTasks} />
        <CheckBox data={data} setData={setData} selectedDate={selectedDate} />
      </div>
    </div>

  )
}

export default ProgressApp