import React ,{useState} from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
let ntime= new Date().toLocaleTimeString()
const [ctime,settime]=useState(ntime);
const setime =()=>{
    let nctime = new Date().toLocaleTimeString();
    settime(nctime)

}
    return (
        <>
<h1>{ctime}</h1>
<button onClick={setime}>get time</button>
        </>
    )

}
 

export default App;
