import React, { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const AddCart = () => {
  // هنا تعريف state مباشرة في المكون
  const [count, setCount] = useState(0);

  // دالة زيادة العدد
  const incresment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // دالة تقليل العدد
  const decresment = () => {
    // منع تقليل العدد لأقل من 0
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <div className='border solid bg-slate-500 rounded-lg p-4'>
        <button className='mb-4'>Add</button>
        <div className='flex flex-row justify-center items-center space-x-4'>
          <CiCirclePlus onClick={incresment} className='cursor-pointer' size={24} />
          <p className='border rounded-md bg-lime-300 text-center mb-1 px-4'>{count}</p>
          <CiCircleMinus onClick={decresment} className='cursor-pointer' size={24} />
        </div>
      </div>
    </div>
  );
}

export default AddCart;
