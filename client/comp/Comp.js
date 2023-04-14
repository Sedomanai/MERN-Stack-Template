import React from 'react';

export default function Comp() {
  return (
    <>
        <p className='text-green-700 text-xl'>What's up?</p>
        <br/>
        <p>This is a component.</p>
        <p>Right now it's {new Date().toDateString()} </p>
        <p>How's coding going on?</p>
    </>
  );
};