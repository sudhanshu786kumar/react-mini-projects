import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Cards';
import './index.css';
import data from './data.js';
function ncard(val){
  return(<Card
    key={val.id} 
    imgsrc={val.imgsrc}
 title={val.title}
  link={val.link}/>);
}
ReactDOM.render(<>
<h1 className="head">List of top 5 netflix</h1>
    {data.map(ncard)}
    
    </>,document.getElementById("root"))
