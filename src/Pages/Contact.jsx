import React from 'react'
import { HiArrowDownRight } from "react-icons/hi2";
const Contact = () => {
  return (
    <>
      <div className='py-10'>
        <div className="container">
          <div className="grid grid-cols-1">
            <div className='w-full lg:w-[450px] mx-auto'>
              <div className='bg-White shadow-md rounded-sm py-5 px-6'>
                <h2 className='font-bold txt25 mb-3'>Enquiry Form</h2>
                <form action="">
                  <div className='mb-3'>
                    <input type='text' placeholder='Name*' className='inputdesign'/>
                  </div>
                  <div className='mb-3'>
                    <input type='text' placeholder='Email*' className='inputdesign'/>
                  </div>
                  <div className='mb-3'>
                    <input type='text' placeholder='Phone Number*' className='inputdesign'/>
                  </div>
                  <div className='mb-3'>
                    <select name="" id="" className='inputdesign'>
                      <option selected="">Select Category</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Fragrances">Fragrances</option>
                      <option value="Groceries">Groceries</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <select name="" id="" className='inputdesign'>
                      <option selected="">Select Category Products</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Fragrances">Fragrances</option>
                      <option value="Groceries">Groceries</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <textarea name="" id="" placeholder='Comment here...' className='inputdesign resize-none'></textarea>
                  </div>
                  <button className='Darkbgbtn'>Submit Enquiry <span className='Darkiconbtn'><HiArrowDownRight/></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.934123412048!2d77.32252319999999!3d28.481530499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7dea57d81d3%3A0xd0361ba186305185!2sKhushal%20Mani%20house!5e0!3m2!1sen!2sin!4v1734691979443!5m2!1sen!2sin" width="100%" height="450"></iframe>
      </div>
    </>
  )
}

export default Contact