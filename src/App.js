import React from 'react';
import Comp from './comp/Comp.js';

export default function App() {
  return (
    <div className='h-screen w-full bg-slate-200 flex items-center text-center justify-center'>
      <div>
        <h1 className='text-red-500 text-4xl'>Hello, Express and React!</h1>
        <br/>
        <Comp/>
      </div>
    </div>
  );
};
