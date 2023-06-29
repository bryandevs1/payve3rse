import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRightAlt, faChevronCircleLeft, faChevronCircleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../assets/img/team-1-800x800.jpg";
import img2 from "../assets/img/team-2-800x800.jpg";
import img3 from "../assets/img/team-3-800x800.jpg";
import { useMediaQuery } from "react-responsive";



const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronCircleLeft} style={{ color: 'grey' }} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronCircleRight} style={{ color: 'grey' }} />
  </button>
);

const SliderTestimonial = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />, // Custom next arrow component
  };

  return(
    <section className="testimonials pt-20">
    <div className="container">
      <div className="testhd font-bold text-buttton">
        Here's what some of our customers say about our us.
      </div>
    <div className="testimonials-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="box" key={index}>
            <i data-aos="zoom-out-up">
              <FontAwesomeIcon icon={faQuoteRightAlt} cl/>
            </i>
            <p data-aos="zoom-out-down" className="font-semibold">
              {testimonial.content}
            </p>
            <div className="img" data-aos="zoom-out-right">
              <img src={testimonial.image} alt="" />
            </div>
            <h3 data-aos="zoom-out-left">{testimonial.name}</h3>
            <label data-aos="zoom-out">{testimonial.profession}</label>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </section>
)
  }

const CardTestimonial = () => {
  return (
    <section className="testimonialss pt-20">
    <div className="container">
      <div className="testhd font-bold text-buttton">
        Here's what some of our customers say about our us.
      </div>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card" key={testimonial.id}>
          <i>
            <FontAwesomeIcon icon={faQuoteRightAlt} className='testic'/>
          </i>
          <p className="testimonial-quote font-semibold">
            {testimonial.content}
          </p>
          <div className="testimonial-author">
            <div className="testimonial-image">
              <img src={testimonial.image} alt="" />
            </div>
            <div className="testimonial-details">
              <h3>{testimonial.name}</h3>
              <label>{testimonial.profession}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};



const testimonials = [
  {
    name: "Joeeph Okoh",
    profession: "⭐⭐⭐⭐",
    content:
      "The Payv3rse By Mac is a reliable digital asset brand, providing secure and worry-free trading.",
    image: img1,
  },
  {
    name: "Adebayo Benson",
    profession: "⭐⭐⭐⭐⭐",
    content:
      " I'm extremely satisfied with The Payv3rse By Mac's fast and dependable digital asset transactions at competitive rates.",
    image: img2,
  },
  {
    name: "Lily Emmanuuel",
    profession: "⭐⭐⭐⭐⭐",
    content:
      "Count on The Payv3rse By Mac for convenient digital asset trading with user-friendly platform and responsive customer support.",    image: img3,
  },
  {
    name: "Osag9e James",
    profession: "⭐⭐⭐⭐",
    content:
      "Among numerous brands, The Payv3rse By Mac stands out with their user-friendly platform and unbeatable rates.",
    image: img3,
  },
];


const Testimonials = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define the maximum width for mobile devices


  return (
    <div id="testimonials">

          {isMobile ? (
            // Render the card testimonial component on mobile devices
            <CardTestimonial />
          ) : (
            // Render the slider testimonial component on larger screens
            <SliderTestimonial />
          )}

    </div>
  );
};

export default Testimonials;
