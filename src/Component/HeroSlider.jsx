import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {assets} from "../assets/assets"
const HeroSlider = () => {
    const HeroSliderImages = [
        {
            id: 1,
            Banner_img: assets.Banner1
        },
        {
            id: 2,
            Banner_img: assets.Banner2
        },
        {
            id: 3,
            Banner_img: assets.Banner3
        },
        {
            id: 4,
            Banner_img: assets.Banner4
        }
    ]
    var heroslide = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <Slider {...heroslide}>
        {HeroSliderImages.map((heroval)=>(
            <div key={heroval.id}>
                <img src={heroval.Banner_img} alt="" />
            </div>
        ))}
    </Slider>
  )
}

export default HeroSlider