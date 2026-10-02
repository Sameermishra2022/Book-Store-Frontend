import React from 'react';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center py-12'>
      <div className='w-16 h-16 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin shadow-lg shadow-indigo-500/20'></div>
    </div>
  );
};

export default Spinner;