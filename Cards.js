import React from 'react';
function Card(props){
    return(
        <div className="cards">
    <div className ="card">
        <img src={props.imgsrc} alt="m" className="card__img"/>
        <div className="card__info">
            <span className="card__category"></span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} rel="noreferrer" target="_blank">
                <button>Watch now</button>
            </a>
        </div>
    </div>
    
</div>

    )
}
export default Card;
