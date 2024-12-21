import React from 'react'
import FeatureCard from './FeatureCard';
import { useState, useEffect } from 'react';
import { FeatureAPI } from '../APIFetch/APIFetchCompo';
const AllFeature = () => {
    const [featurecard, setFeatureCard] = useState([]);
        const FetchFeatureAPI = async () =>{
            try{
                const FetchFeatureData = await FeatureAPI();
                setFeatureCard(FetchFeatureData?.data.products)
            }
            catch(error){
                console.error("Feature not found : ", error)
            }
        }
        
        useEffect(()=>{
            FetchFeatureAPI();
        },[])
  return (
    <div className='py-10'>
        <div className="container">
            <div className="grid grid-cols-12">
                {featurecard.map((featureval,ind)=>(
                    <div className="col-span-3">
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
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllFeature