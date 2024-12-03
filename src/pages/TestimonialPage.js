import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This platform made finding my new home so easy and stress-free. Highly recommended!",
    image: '/Card-images/testimonial-1.jpg' 
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Excellent service and a wide range of properties to choose from. I found my dream home!",
    image: "/Card-images/testimonial-3.jpg" 
  },
  {
    id: 3,
    name: "Michael Johnson",
    feedback: "The user experience is fantastic, and the customer support is top-notch. Great job!",
    image: "/Card-images/testimonial-4.jpg" 
  },
  {
    id: 4,
    name: "Akash Kumar",
    feedback: "This platform made finding my new home so easy and stress-free. Highly recommended!",
    image: "/Card-images/user.jpg" 
  },
  {
    id: 5,
    name: "Preeti Yadav",
    feedback: "Excellent service and a wide range of properties to choose from. I found my dream home!",
    image: "/Card-images/testimonial-2.jpg"
  },
  {
    id: 6,
    name: "Niya Gupta",
    feedback: "The user experience is fantastic, and the customer support is top-notch. Great job!",
    image: "/Card-images/team-3.jpg"
  }
];

const TestimonialPage = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="testimonial-slide">
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialPage;
