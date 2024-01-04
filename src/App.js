import { useEffect, useState } from "react";
import SizeTracker from "./components/SizeTracker";
function App() {
 const[text,setText]=useState('');
 const[name,setName]=useState('Bittu');

 //variation one -> will run on every render
//  useEffect(()=>{
//   console.log("Ui rendering done");
//  })

 //variation 2->first render
//  useEffect(()=>{
//   console.log('UI render for the first time')
//  },[]);

//variation 3->on first render+ whenever dependency changes

// useEffect(()=>{
//   console.log("Change Observed");
// },[name]);

//variation 4 ->to handle unmounting of a component

// useEffect((event)=>{
  //add event listener
//   console.log('Listener added');
//   return ()=>{
//     console.log('Listener removed');
//   }
// })

//  function changeHandler(event){
//   setText(event.target.value);
//   console.log(text);
 
//  }

  return (
    <div className="App">
    {/* <input type='text ' onChange={changeHandler}></input> */}
   <SizeTracker/>
    </div>
  );
}

export default App;
