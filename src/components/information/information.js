import { React } from "react";
import '../information/information.css';
import Teamlogo from '../../assets/TeamImage.PNG';
import smartch from '../../assets/smartch.jpg';
import smartch2 from '../../assets/smartch2.jpg';
import hikal from '../../assets/hikal.jpg';
import hikal1 from '../../assets/hikal1.jpg';
import hikal2 from '../../assets/hikal2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import dara from '../../assets/dara.jpg';

const Information = () => {

    return (
        <div className="info">
            <div className="infoParagraph">
                <p className="paragraph">نظام <a className="Name"> SignEase </a>يمثل خطوة هامة نحو دمج التكنولوجيا في حياة الأشخاص الصم      </p>
                <span> هو تطبيق مبتكر يهدف إلى تحسين التواصل مع الصم عبر تقديم موارد تعليمية متنوعة وتفاعلية </span>
                <br></br>
                <span>يحتوي النظام على سوار أو ساعة ذكية تساهم في الأمن والسلامة مثل إرسال إشعارات هامة من التنبيهات الطارئةأو المكالمات الواردة من خلال إهتزازات مميزة</span>
                <br></br>
                <span>التطبيق مربوط بقفاز ذكي وظيفته ترجمة التهجئة بالأصابع إلى نصوص أو كلام منطوق ما يسمح للأشخاص السامعين بفهم لغة الأشارة بسهولة </span>
                <br></br>
                <span>يستخدم النظام أحدث التقنيات لضمان تعلم فعالة ومثمرة ويساهم في تمكينهم من التفاعل بكفاءة مع المجتمع من خلال الدمج بين التطبيق والسوار الذكي والقفاز</span>
                <br></br>
                <span> تم تصميم وتطوير النظام من طرف طلبة قسم الإعلام الألي للمدرسة العليا لأساتذة الصم والبكم </span>
            </div>
            <div className="image">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}

                    pagination={{ clickable: true }}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={Teamlogo} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={smartch} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={smartch2} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={hikal} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={hikal1} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={hikal2} className="imgSwiper" ></img></SwiperSlide>



                </Swiper>
            </div>



        </div>
    )
}

export default Information;
