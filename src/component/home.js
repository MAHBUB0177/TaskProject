import React from 'react'
import Employeelist from './employeelist'
import ServiceList from './serviceList'
import Orderlist from './orderlist'
import Foodmenu from './foodmenu'
import chart from '../images/chart.png'
import {  TbMilitaryAward } from "react-icons/tb";

const Home = () => {
  return (

    <div>
            <div className=' mx-auto container grid lg:grid-cols-2 gap-2 mt-[30px] p-[20px]'>
                <div className='bg-slate-100 rounded-md p-10 border shadow-sm ' >

                    <p className='flex justify-center items-center '>
                    <TbMilitaryAward color="white" fontSize="4.5em"  className='text-orange-400'/>
                    </p>
                    <p className='font-bold text-md text-center'>
                        This year winner to Tomatus <span className='text-orange-400' >Congratulations</span>
                    </p>
                    
                    <p className='text-center font-semibold text-slate-500'>
                    In publishing and graphic design, Lorem ipsum is a placeholder .text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.. Lorem ipsum may be used as a placeholder before final copy is available
                    </p>
                </div>
                

                <div className='bg-slate-100 rounded-md p-10 border shadow-sm'>
                    <img src={chart}  alt='chartjs' className='h-[240px] w-full'/>
                </div>
            </div>

        <div className=' mx-auto container grid lg:grid-cols-2 gap-2  p-[20px] mt-[20px] '>
                <ServiceList/>
                <div>
                    <div className='flex sm:items-center sm:text-center md:justify-between sm:gap-1 '>
                    <h2 className='text-black font-medium text-lg'>Customer Feed</h2>
                    <h2 className='text-black font-medium text-lg'>View All</h2>
                    </div>
                <div className='bg-slate-100 rounded-md p-10 border shadow-sm grid grid-cols-1 w-full '>
                <Employeelist />
                </div>
            </div>
        </div>
        
        <div className=' mx-auto container grid lg:grid-cols-2 gap-2  p-[20px]  mt-[20px]'>
            <div>
            <h2 className='text-black font-medium text-lg text-start'>Receive Order List</h2>
            <div className='bg-slate-100 rounded-md p-10 border shadow-sm  '>
                <Orderlist />
            </div>
            </div>
           

            <div>
            <h2 className='text-black font-medium text-lg text-start'>Hot Food Menu</h2>
            <div className='bg-slate-100 rounded-md p-10 border shadow-sm  '>
                <Foodmenu />
            </div>
            </div>
        </div>


    </div>
      

    
  )
}

export default Home

