import React from 'react';

function Loading() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400'></div>
        <p className='text-blue-400 text-2xl'>Loading...</p>
      </div>
    </>
  );
}

export default Loading;
