import React from 'react'
import { useNavigate} from 'react-router-dom'
import { FaStar } from "react-icons/fa";


const FeatureCard = ({feature_slug, feature_image, feature_name, feature_category, feature_price, feature_discount,feature_rating}) => {
    const navigate = useNavigate()
    const HandleBtn =  () =>{
        navigate(`/feature/${feature_slug}`)
    }
  return (
        <div>
            <div className='relative shadow-md m-3 rounded-lg overflow-hidden' onClick={HandleBtn}>
                <div className='flex items-center justify-center bg-orange-100'><img className='h-40' src={feature_image} alt={feature_name} /></div>
                <div className='p-5'>
                    <span className='text-DarkColor bg-orange-50 py-[2px] px-3 rounded-xl'>{feature_category}</span>
                    <h3 className='text-2xl text-DarkColor line-clamp-1 mt10 font-bold mb-1'>{feature_name}</h3>
                    <div className='flex items-center gap-x-4 mb-2'>
                        <h2 className='text-xl font-bold'>₹{`${feature_price}`}</h2>
                        <h3 className='text-sm line-through'>₹{feature_discount}</h3>
                    </div>
                    <div className=''>
                        <span className='bg-green-500 text-center text-White font-bold text-lg rounded-xl py-1 px-3 inline-flex items-center gap-x-2'>{feature_rating}<FaStar/></span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FeatureCard