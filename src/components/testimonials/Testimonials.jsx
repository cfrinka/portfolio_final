import { testimonialData } from '../../data/testimonials'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Testimonials.css'
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5> Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    testimonialData.map(({ id, avatar, fullName, review }) => {
                        return (
                            <SwiperSlide className="testimonial" key={id}>
                                <div className="client__avatar">
                                    <img src={avatar} alt="client_avatar" />
                                </div>
                                <h5 className='client__name'>{fullName}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials