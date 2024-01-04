import React, { useState } from 'react'
import { useEffect } from 'react';
function SizeTracker() {

    const [winSize,setWindowSize]=useState({
        width: window.innerWidth,
        height:window.innerHeight
    })
    useEffect(()=>{
        function handleResize(){
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
                });
        }
        window.addEventListener("resize",handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
  return (
    <div>
      <h3>Window width: {winSize.width}</h3>
      <h3>Window Height:{winSize.height}</h3>
    </div>
  )
}

export default SizeTracker;
