import React from 'react'
import { HiArrowDownRight } from "react-icons/hi2";
import {assets} from "../../src/assets/assets"
import { useNavigate } from 'react-router-dom';
const WebError = () => {
    const navigate = useNavigate()
  return (
    <div className='py-10 bg-Lightcolor'>
        <div className='container'>
            <div className='grid grid-cols-12'>
                <div className="col-span-12 md:col-span-6">
                    <div className='flex justify-center items-start flex-col h-full mb-10'>
                        <span className='text-xl text-DarkColor'>Oops!... 404 page not found</span>
                        <h2 className='mb10 txt50 capitalize'>Something <span className='text-DarkColor'>gone wrong!....</span></h2>
                        <p className='mb20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis dolorum molestiae sed excepturi eius recusandae ad doloremque quia, quo minus sequi unde quasi inventore. Totam cumque minima laudantium incidunt.</p>
                        <button className='Darkbgbtn' onClick={()=>navigate("/")}>Back to home <span className='Darkiconbtn'><HiArrowDownRight/></span> </button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className='flex items-center justify-center'><img src={assets.Error400} alt="Page not found" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebError