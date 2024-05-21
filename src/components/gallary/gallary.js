import React from "react";
import Card from "../Card/card";
import '../gallary/gallary.css';
import image from '../../assets/image1.jpg';

const Gallary = () => {
    return (
        <div className="gallary">
            <h3 className="gallaryTitle">معرض للتطبيق </h3>
            <div className="gallaryInfo">
                <Card image={image} infoImage="في الصفحة الأولى للتطبيق تظهر لك خيارات المتاحة حيث يمكنك إختيار التعلم أو التواصل "></Card>
                <Card image={image} infoImage="في الصفحة الأولى للتطبيق تظهر لك خيارات المتاحة حيث يمكنك إختيار التعلم أو التواصل "></Card>
                <Card image={image} infoImage="في الصفحة الأولى للتطبيق تظهر لك خيارات المتاحة حيث يمكنك إختيار التعلم أو التواصل "></Card>
                <Card image={image} infoImage="في الصفحة الأولى للتطبيق تظهر لك خيارات المتاحة حيث يمكنك إختيار التعلم أو التواصل "></Card>

            </div>
        </div>
    )
}

export default Gallary;

