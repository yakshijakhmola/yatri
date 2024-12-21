import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { FeatureDetail } from '../APIFetch/APIFetchCompo';

const FeatureDetails = () => {
    const [detailfeat, setDetailFeat] = useState(null);
    const {title} = useParams()
    const DetailFetch = async () =>{
        const DetailData = await FeatureDetail(title);
        setDetailFeat(DetailData.data);
        console.log(DetailData.data)

    }
    useEffect(()=>{
        DetailFetch();
    },[title])
  return (
    <div className='py-10'>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-6">
                    <div>
                        <div className='border border-solid border-grey-100 shadow-sm rounded-xl mb-3'>
                            <img src={detailfeat.images} alt={detailfeat.title} />
                        </div>
                        <button onClick={()=>navigate("/")} className='Darkbgbtn'>Add to Cart <span className='Darkiconbtn'><FiShoppingCart/></span></button>
                    </div>
                </div>
                <div className="col-span-6">
                    <div>
                        <div className='p-5 border border-solid border-gray-100 rounded-md shadow-sm mb-3'>
                            <span className='text-DarkColor bg-orange-50 py-[2px] px-3 rounded-xl'>{detailfeat.category}</span>
                            <h3 className='text-2xl text-DarkColor line-clamp-1 mt10 font-bold mb-1'>{detailfeat.title}</h3>
                            <p>{val.description}</p>
                            <div className='flex items-center gap-x-5'>
                                <h6 className={detailfeat.availabilityStatus === "Low Stock"? "text-red-700 font-bold py-1 px-3 rounded-2xl my-2 bg-red-100 inline-block": "text-green-700 font-bold py-1 px-3 rounded-2xl my-2 bg-green-100 inline-block"}>{val.availabilityStatus}</h6>
                                <h5>{val.stock}</h5>
                            </div>
                            <div className='flex items-center gap-x-4 mb-2'>
                                <h2 className='text-xl font-bold'>₹{detailfeat.price}</h2>
                                <h3 className='text-sm line-through'>₹{detailfeat.discountPercentage}</h3>
                            </div>
                            <div className=''>
                                <span className='bg-green-500 text-center text-White font-bold text-lg rounded-xl py-1 px-3 inline-flex items-center gap-x-2'>{val.rating}<FaStar/></span>
                            </div>
                            <span>{detailfeat.warrantyInformation}</span>
                        </div>
                        <div className='p-5 border border-solid border-gray-100 rounded-md shadow-sm mb-3'>
                            <h2 className='txt25 font-bold mb10'>Products Details</h2>
                            <ul className='flex items-center flex-wrap gap-x-5'>
                                <li className=''><p><b className='mr-3'>Brand:</b>{detailfeat.brand}</p></li>
                                <li className=''><p><b className='mr-3'>SKU:</b>{detailfeat.sku}</p></li>
                                <li className=''><p><b className='mr-3'>Weight:</b>{detailfeat.weight}</p></li>
                                <li><p><b className='text-DarkColor my-2'>Dimensions</b></p>
                                    <ul className='flex items-center flex-wrap gap-x-5'>
                                        <li><p><b className='mr-3'>Width:</b>{detailfeat.dimensions.width}</p></li>
                                        <li><p><b className='mr-3'>Height:</b>{detailfeat.dimensions.height}</p></li>
                                        <li><p><b className='mr-3'>Depth:</b>{detailfeat.dimensions.depth}</p></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureDetails