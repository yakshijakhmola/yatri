import React, { useEffect } from 'react'
import { useState } from 'react'
import { FeatureAPI } from '../APIFetch/APIFetchCompo';
import { HiArrowDownRight } from "react-icons/hi2";
import FeatureCard from './FeatureCard';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
const FeatureSlider = () => {
    const navigate = useNavigate();
    const Featureslide = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const [featurecard, setFeatureCard] = useState([]);
    const FetchFeatureAPI = async () =>{
        try{
            const FetchFeatureData = await FeatureAPI();
            setFeatureCard(FetchFeatureData.data.products)
        }
        catch(error){
            console.log("Feature not found : ", error)
        }
    }
    useEffect(()=>{
        FetchFeatureAPI();
    },[])
  return (
    <>
        <div className='py-10'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-7">
                        <h2 className='txt50 mb10'>Our <span className='text-DarkColor'>Features</span> Categories</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam repellat itaque quo odio provident quas voluptates nam. Ducimus, vitae debitis? Aspernatur sunt, qui eaque quam harum pariatur. Praesentium, aperiam perferendis.</p>
                    </div>
                    <div className="col-span-5 flex items-center justify-start lg:justify-end">
                        <button onClick={()=>navigate("/feature")} className='Darkbgbtn'>Explore All Features <span className='Darkiconbtn'><HiArrowDownRight/></span></button>
                    </div>
                </div>
                <Slider {...Featureslide} className='mt20'>
                    {featurecard.map((featureval,ind)=>(
                        <FeatureCard 
                            key={ind} 
                            feature_slug ={featureval.category}
                            feature_image={featureval.images}
                            feature_name={featureval.title}
                            feature_category={featureval.category || "Not Found Categories"}
                            feature_price ={featureval.price}
                            feature_discount ={featureval.discountPercentage}
                            feature_rating={featureval.rating}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default FeatureSlider