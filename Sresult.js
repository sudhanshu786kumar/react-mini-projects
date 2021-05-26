import React from 'react';


const Sresult =(props)=>{
    const source=`https://source.unsplash.com/400x400/?${props.name}`;
    return(
   
  <div>
    <img src={source} alt="img"/>;
    </div>
    );

}
export  default Sresult ;
