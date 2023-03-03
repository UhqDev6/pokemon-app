import React from 'react';

function SpinnerLoading() {
  return (
    <div className="h-screen grid">
      <div className="border-violet-400 border-4  w-[40px] h-[40px] border-primary border-solid rounded-full animate-spin mx-auto mt-20 " />
    </div>
  );
}

export default SpinnerLoading;
