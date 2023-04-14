import React, { useState, useEffect }  from 'react';
import moment from 'moment';

export default function Comp() {
  const [currentTime, setCurrentTime] = useState(moment());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
        <p className='text-green-700 text-xl'>What's up?</p>
        <br/>
        <p>This is a component.</p>
        <p>Right now it's {currentTime.format('MMMM Do YYYY, h:mm:ss a')} </p>
        <p>How's coding going on?</p>
    </>
  );
};