import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiMiniLockClosed } from "react-icons/hi2";
import { HiMiniLockOpen } from "react-icons/hi2";



const Navbar = () => {
  const navigate = useNavigate();
  const [showform, setShowForm] = useState(false);
  const [showpass, setShowPass] = useState(false)
  const [name, setName] = useState("");
  const [create, setCreate] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({});

  const FormValidation = (e) => {
    e.preventDefault();
    const NewError ={}
    if(!name.trim()){
      NewError.name = "Name Field are required"
    }
    else if(!create.trim()){
      NewError.create = "Create field password"
    }
    else if(!pass.trim()){
      NewError.pass = "Password field required"
    }
    else if(create !== pass){
      NewError.pass ="Password not matched";
    }
    else{
      alert("Successful Submission!...")
      setName("")
      setCreate("")
      setPass("")
    }
    setError(NewError)
  }
  return (
  <>
    <header>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <a onClick={()=>navigate("/")}><h5 className='text-DarkColor txt50 uppercase'>yatri</h5></a>
          <ul className='hidden lg:flex items-center gap-x-8'>
            <li><a onClick={()=>navigate("/")}>Home</a></li>
            <li><a href="">About</a></li>
            <li><a onClick={()=>navigate('/feature')}>Taxi Services & Transfers</a></li>
            <li><a href="">Holidays Packages</a></li>
            <li><a href="">City Tours</a></li>
            <li><a onClick={()=>navigate("/contact")}>Contact Us</a></li>
          </ul>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center gap-x-5 border border-DarkColor border-solid py-2 px-3 rounded-full'><BiSearchAlt2/><input type="text" placeholder='What are you looking?' className='focus:outline-none' /></div>
            <button className='Darkbgbtn' onClick={()=>setShowForm(!showform)}>Sign in <span className='Darkiconbtn'><IoIosLogIn/></span></button>
          </div>
        </div>
      </div>
    </header>
    {showform && (
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-White py-8 px-5 z-50 rounded-2xl transition-all delay-500 ease-linear'>
        <h2 className='text-center text-3xl font-bold mb-3'>Sign Up</h2>
        <form onSubmit={FormValidation}>
          <div className='mb-4 border border-solid border-DarkColor py-2 px-3 w-full rounded-md'>
            <input type="text" placeholder='Email' className='focus:outline-none' value={name} onChange={(e)=>setName(e.target.value)} />
            {error.name && <p className='text-red-600'>{error.name}</p> }
          </div>
          <div className='mb-4 border border-solid border-DarkColor py-2 px-3 w-full rounded-md'>
            <input type="text" placeholder='Create Password' className='focus:outline-none' value={create} onChange={(e)=>setCreate(e.target.value)}/>
            {error.create && <p className='text-red-600'>{error.create}</p> }
          </div>
          <div className='mb-4 border border-solid border-DarkColor py-2 px-3 w-full rounded-md'>
            <div className='flex items-center justify-between'>
              <input type={showpass? "type" : "password"} placeholder='Confirm Password' className='focus:outline-none' value={pass} onChange={(e)=>setPass(e.target.value)}/>
              <span onClick={()=>setShowPass(!showpass)}>{showpass? <HiMiniLockClosed/> : <HiMiniLockOpen/>}</span>
            </div>
            {error.pass && <p className='text-red-600'>{error.pass}</p> }
          </div>
          <div>
            <button className='bg-DarkColor text-center text-White py-2 px-5 inline-block w-full rounded-md' onSubmit={()=>FormValidation()}>Login</button>
            <h5 className='text-center text-sm mt-3'>Already have an account? <a className='text-DarkColor'>Login</a></h5>
          </div>
        </form>
      </div>
    )}
  </>
  )
}

export default Navbar