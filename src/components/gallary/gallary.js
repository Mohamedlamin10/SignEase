import React from "react";
import Card from "../Card/card";
import '../gallary/gallary.css';
import image from '../../assets/image1.jpg';
import app1 from '../../assets/app1.jpg';
import app2 from '../../assets/app2.jpg';
import app3 from '../../assets/app3.jpg';
import app4 from '../../assets/app4.jpg';
import page1 from '../../assets/page1.PNG'
import tanbihat from '../../assets/tanbihat.jpg'
const Gallary = () => {
    return (
        <div className="gallary">
            <h3 className="gallaryTitle">واجهات التطبيق </h3>
            <div className="gallaryInfo">
                <Card image={page1} infoImage="تعلم لغة الإشارة مع تطبيق SignEase"></Card>

                <Card image={app1} infoImage="بعد تخطي الصفحة الأولى يظهر لك هذا القسم الخاص بضبط إعدادات السوار الذكي مثل الإسم والشبكة المراد الإتصال بها "></Card>
                <Card image={tanbihat} infoImage="في نفس قسم ضبط السوار يظهر لك قسم التنبيهات حيث يمكنك إشعار تلميذ معين في القسم أو كل التلاميذ من تشتت إنتباه أو خطر ما "></Card>
                <Card image={app4} infoImage="هذا القسم يمكنك من ترجمة اللغة المكتوبة إلى لفة الأشارة الجزائرية من خلال شخصية أوليفر "></Card>
                <Card image={app3} infoImage="بعد دخولك لقسم الترجمة يظهر لك أوليفر الذي يترجم لك النص المكتوب أو المسموع إلى لغة إشارية"></Card>
                <Card image={app2} infoImage="في هذا القسم يمكنك تعلم لغة الإشارة الجزائرية من خلال فيديوهات أو قاموس كلمات "></Card>


            </div>
        </div>
    )
}

export default Gallary;

