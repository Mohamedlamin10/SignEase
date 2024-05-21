import { React, useState } from "react";
import '../Cardcv/cvcard.css';

const Cardcv = (props) => {
    const image = props.image;
    const prenom = props.prenom;
    const [dis, setDisplay] = useState('none');
    const cv = props.cv;
    const addHover = () => {
        setDisplay('block');
    }

    const removeHover = () => {
        setDisplay('none');
    }

    return (
        <div className="cardcv" onMouseOver={addHover} onMouseOut={removeHover}>
            <img alt="imagecv" src={image} className="imageCard"></img>
            <div className="infocard">
                <p>{prenom}</p>
            </div>
            <div className="cvInfo" style={{ display: dis }}>
                {cv}
            </div>
        </div>
    )
}

export default Cardcv;