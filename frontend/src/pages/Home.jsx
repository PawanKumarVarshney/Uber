import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
    const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const panelRef = useRef(null)
const panelCloseRef = useRef(null)
    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(() => {
        if(panelOpen){
            gsap.to(panelRef.current,{
            height:'70%',
            padding:24
            //opacity: 1
        })
        gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%',
                padding:0
                //opacity: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    },[panelOpen])

    return (
        <div className='h-screen relative'> 
            <img className='w-16 absolute left-5 top-5' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber logo" />
            <div className='h-screen w-screen'>
               {/* image for teporary use  */}
               <img className='w-full h-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="map image" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
                <div className='h-[30%] p-6 bg-white relative'>
<h5 ref={panelCloseRef} onClick={()=>{
    setPanelOpen(false)
}} className='absolute opacity-0 right-6 top-6 text-2xl'> 
    <i className="ri-arrow-down-wide-line"></i></h5>                    <h4 className='text-3xl font-semibold'>Find a trip</h4>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
                   <input 
                   onClick={() => {
                                setPanelOpen(true)
                                
                            }}
                   value={pickup}
                    onChange={(e) => {
                        setPickup(e.target.value)}}
                   className='bg-[#feee] px-12 py-2 w-full text-base rounded-lg w-full mt-3' type="text" placeholder="Enter pick-up location"  /> 
                   <input 
                   onClick={() => {
                                setPanelOpen(true)
                                
                            }}
                   value={destination} 
                   onChange={(e) =>{
                    setDestination(e.target.value)} }
                    className='bg-[#feee] px-12 py-2 w-full text-base rounded-lg w-full mt-3' 
                    type="text" 
                    placeholder="Enter drop-off location"  />
                </form>
                </div>
                <div ref={panelRef} className=' bg-white h-0'>
                    <LocationSearchPanel/>
                </div>
            </div>
        </div>
    )
}
export default Home