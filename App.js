import React , {useState} from 'react';

const App = ()=>{
    let time = new Date().toLocaleTimeString();
const [ctime,settime] =useState(time);
const uptime=()=>{
    let ntime= new Date().toLocaleTimeString();
    settime(ntime)

};
setInterval(uptime,1);
    return(
        <>
        <h1>{ctime}</h1>
        
        </>
    );
};
export default App;
