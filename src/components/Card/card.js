import React from "react";
import '../Card/card.css';

const Card = (props) => {
    const image = props.image;
    const infoImage = props.infoImage;
    return (
        <div className="card">
            <img src={image} className="imagecard"></img>
            <h5 className="infoimagecard">{infoImage}</h5>
        </div>
    )
}

export default Card;