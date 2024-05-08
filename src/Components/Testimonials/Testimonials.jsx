import "./Testimonials.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
    {
      img: profilePic2,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
    {
      img: profilePic3,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
    {
      img: profilePic4,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
    {
      img: profilePic5,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
    {
      img: profilePic6,
      review:
        "lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor lorem ipsume dolor ",
    },
  ];
  return (
    <div className="t-wrapper" id= 'Testimonials'>
      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--skyblue)" }}
        ></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial" >
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
