import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";

import { TfiLocationPin } from "react-icons/tfi";


const Footer = () => {
    const navigate = useNavigate()
    const Holidays = [
        {
            id: 1,
            Holidays_name: "same day agra tour from delhi"
        },
        {
            id: 2,
            Holidays_name: "delhi agra tour packages"
        },
        {
            id: 3,
            Holidays_name: "same day tour from delhi"
        },
        {
            id: 4,
            Holidays_name: "delhi agra jaipur packages"
        },
        {
            id: 5,
            Holidays_name: "Golden temple packages"
        },
        {
            id: 6,
            Holidays_name: "rajasthan tour by car"
        },
        {
            id: 7,
            Holidays_name: "uttrakhand tour packages"
        }
    ]
    const City =[
        {
            id:1,
            Cityname: "agra sightseeing packages"
        },
        {
            id:2,
            Cityname: "ahmedabad sightseeing packages"
        },
        {
            id:3,
            Cityname: "delhi sightseeing packages"
        },
        {
            id:4,
            Cityname: "Jaipur sightseeing packages"
        },
        {
            id:5,
            Cityname: "jodhpur sightseeing packages"
        },
        {
            id:6,
            Cityname: "udhaipur sightseeing packages"
        }
    ]
    const Taxi =[
        {
            id:1,
            Taxiname: "taxi services in ahemdabad"
        },
        {
            id:2,
            Taxiname: "chardham yatra taxi"
        },
        {
            id:3,
            Taxiname: "taxi services in haridwar"
        },
        {
            id:4,
            Taxiname: "taxi services in agra"
        },
        {
            id:5,
            Taxiname: "uttarkhand taxi services"
        },
        {
            id:6,
            Taxiname: "himachal taxi services"
        },
        {
            id:7,
            Taxiname: "taxi services in jodhpur"
        },
        {
            id:8,
            Taxiname: "taxi services in udhaipur"
        }
    ]
  return (
    <footer className='py-10 relative'>
        <div className="px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className='px-5'>
                    <h5 className='txt25 mb10 capitalize text-DarkColor'>Taxi Services</h5>
                    <ul>
                        {Taxi.map((taxival,ind)=>(
                            <li key={ind}><p className='footerpara'>{taxival.Taxiname}</p></li>
                        ))}
                    </ul>
                </div>
                <div className='px-5'>
                    <h5 className='txt25 mb10 capitalize text-DarkColor'>Holidays Packages</h5>
                    <ul>
                        {Holidays.map((holival,ind)=>(
                            <li key={ind}><p className='footerpara'>{holival.Holidays_name}</p></li>
                        ))}
                    </ul>
                </div>
                <div className='px-5'>
                    <h5 className='txt25 mb10 capitalize text-DarkColor'>City tours</h5>
                    <ul>
                        {City.map((cityval,ind)=>(
                            <li key={ind}><p className='footerpara'>{cityval.Cityname}</p></li>
                        ))}
                    </ul>
                </div>
                <div className='px-5 flex items-center justify-center flex-col h-full'>
                    <a onClick={()=>navigate("/")}><h6 className='text-DarkColor txt50 uppercase'>yatri</h6></a>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit accusamus similique laudantium, nulla est explicabo debitis ducimus</p>
                    <div className='grid grid-cols-1 lg:grid-cols-5 mt10 gap-x-3'>
                        <a onClick={()=>navigate()} className='footer-social'><FaFacebookF/></a>
                        <a onClick={()=>navigate()} className='footer-social'><FaInstagram/></a>
                        <a onClick={()=>navigate()} className='footer-social'><FaLinkedinIn/></a>
                        <a onClick={()=>navigate()} className='footer-social'><FaXTwitter/></a>
                        <a onClick={()=>navigate()} className='footer-social'><FaGoogle/></a>
                    </div>
                </div>
                <div className='px-5'>
                    <h5 className='txt25 mb10 capitalize text-DarkColor'>Connect with us</h5>
                    <div>
                        <div className='flex items-start gap-x-3 mb-2'>
                            <div><PiPhoneCallLight className='text-DarkColor text-4xl'/></div>
                            <div>
                                <h6 className='font-bold text-DarkColor'>Phone Number</h6>
                                <span className='text-sm'>+91 9876543210</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-x-3 mb-2'>
                            <div><IoMailOpenOutline className='text-DarkColor text-4xl'/></div>
                            <div>
                                <h6 className='font-bold text-DarkColor'>Email I'd</h6>
                                <span className='text-sm'>info@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-x-3 mb-2'>
                            <div><TfiLocationPin className='text-DarkColor text-4xl'/></div>
                            <div>
                                <h6 className='font-bold text-DarkColor'>Location</h6>
                                <span className='text-sm'>Lorem ipsum dolor sit amet consectetur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer