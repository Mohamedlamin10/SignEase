import React from "react";
import '../Luange/luangSign.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import a from '../../assets/a.jpg';
import b from '../../assets/b.jpg';
import c from '../../assets/c.jpg';
import d from '../../assets/d.jpg';
import e from '../../assets/e.jpg';
import f from '../../assets/f.jpg';
import j from '../../assets/j.jpg';
import h from '../../assets/h.jpg';
import i from '../../assets/i.jpg';
import g from '../../assets/g.jpg';
import k from '../../assets/k.jpg';
import l from '../../assets/l.jpg';
import m from '../../assets/m.jpg';
import n from '../../assets/n.jpg';
import o from '../../assets/o.jpg';
import p from '../../assets/p.jpg';
import q from '../../assets/q.jpg';
import s from '../../assets/s.jpg';
import t from '../../assets/t.jpg';
import u from '../../assets/u.jpg';
import v from '../../assets/v.jpg';
import w from '../../assets/w.jpg';
import x from '../../assets/x.jpg';
import y from '../../assets/y.jpg';
import z from '../../assets/z.jpg';
import ha from '../../assets/ha.jpg';
import wa from '../../assets/wa.jpg';
import ya from '../../assets/ya.jpg';
import ta from '../../assets/tamarbota.jpg';
import al from '../../assets/al.jpg';
const Luange = () => {
    return (
        <div className="luangeSigen">
            <h3 className="TitleLaunge">لغة الإشارة</h3>
            <div className="introLuange">
                <p >  لغة الإشارة عبارة عن رموز مرتبة إيمائية تستعمل بشكل منظم، وتتركب من اتحاد وتجميع بشكل اليد وحركتها مع بقية أجزاء الجسم التي تقوم بحركات معينة تمشياً مع حدة الموقف، ولغة الإشارة وسيلة للتواصل تعتمد اعتماداً كبيراً على الإبصار، أو هي نظام حسي بصري ينوي يقوم على أساس الربط بين الإشارة والمعنى.</p>
                <br></br>
                <p>        ولغة الإشارة لغة مستقلة لها فوائدها ونظامها والذي يمكن من تركيب جمل كاملة وتعد لغة طبيعية أو كاللغة الأم بالنسبة للصم، ونسبة اكتسابها وتعليم الصم للفتهم في نفس النسبة التي يتعلم بها السامعون لغتهم، وتسير بنفس الأطوار تقريباً، ومن الملاحظ أن الأصم وإن كان يتبع البرنامج الشفهي ويحضر علية التعامل بلغة الإشارة، فإن هي تعلم الإشارة أولاً، أي قبل تعلم اللغة الشفهية .

                </p>
            </div>
            <div className="images">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}

                    pagination={{ clickable: true }}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                >
                    <SwiperSlide><img src={a} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={b} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={c} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={d} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={e} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={f} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={j} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={h} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={i} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={g} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={k} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={l} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={m} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={n} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={o} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={p} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={q} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={s} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={t} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={u} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={v} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={w} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={x} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={y} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={z} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={ha} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={wa} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={ya} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={ta} className="imgSwiper" ></img></SwiperSlide>
                    <SwiperSlide><img src={al} className="imgSwiper" ></img></SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
};

export default Luange;