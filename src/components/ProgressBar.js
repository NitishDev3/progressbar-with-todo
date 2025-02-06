import React, { useState } from 'react';

const ProgressBar = ({ totalNumTasks, completedNumTasks }) => {

  let percentage = ((completedNumTasks / totalNumTasks) * 100).toFixed(2);

  if (isNaN(percentage) || percentage === undefined) {
    percentage = "0.00";
  }

  percentage = String(percentage);


  return (
    <div className='my-4'>
      <div className='w-full sm:w-[600px] md:w-[900px] h-[20px] border-2 border-black rounded-sm z-10'>
        <div className="flex justify-center h-[17px] bg-green-600" style={{ "width": percentage + "%" }}>
          {percentage !== "0.00" ? (
            <p className='text-xs sm:text-sm md:text-base lg:text-xs font-medium text-white'>
              {percentage}%
            </p>
          ) : <></>}
        </div>
      </div>
    </div>

  )
}

export default ProgressBar