import React from "react";
import '../Cv/cv.css';
import Cardcv from "../Cardcv/cvcard";
import khaled from '../../assets/khaled.jpg';
import mohamed from '../../assets/mohamed.jpg';
import yaakoub from '../../assets/yaakoub.jpg'
const Cv = () => {
    return (
        <div className="cv">
            <h1>مطوري النظام </h1>
            <div className="CardCv">
                <Cardcv image={yaakoub} prenom='   وهاب يعقوب' cv='ماستر 2 إعلام ألي المدرسة العليا لأساتذة الصم والبكم مهندس برمجيات (تطبيقات ومواقع )وأنظمة مدمجة (أردوينو ) بالإضافة إلى باحث في مجال الذكاء الإصطناعي' age='27'></Cardcv>
                <Cardcv image={mohamed} prenom='محمد لمين  محمودي' cv='ماستر 2 إعلام ألي المدرسة العليا لأساتذة الصم والبكم مصمم تطبيقات ومواقع ويب '  ></Cardcv>
                <Cardcv image={khaled} prenom=' خالد محمد أمين' cv=' ماستر 2 إعلام الي المدرسة العليا لأساتذة الصم والبكم مصمم ومطور واجهات التطبيقات ومواقع الويب' ></Cardcv>

            </div>
        </div>
    )
}
export default Cv;