import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './aboutSwiper.css';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import AboutCard from '../aboutCard';
import aboutCardData from '../../pages/aboutCardData';

class AboutSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: aboutCardData.stories,
            story: aboutCardData.stories[0]
        };
    }

    render() {
        const { stories } = this.state;

        return (
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 10,
                    depth: 80,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    768: {  // Medium screens and above
                        slidesPerView: 'auto',
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 10,
                            depth: 80,
                            modifier: 1,
                            slideShadows: true,
                        }
                    },
                    0: {  // Screens smaller than 768px
                        slidesPerView: 1,
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 10,
                            depth: 80,
                            modifier: 0,  // Set modifier to 0
                            slideShadows: true,
                        }
                    }
                }}
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={index}>
                        <AboutCard
                            imgSrc={story.imgSrc}
                            title={story.title}
                            description={story.description}
                            link={story.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default AboutSwiper;
