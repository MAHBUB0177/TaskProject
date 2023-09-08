import React from 'react'
import Employeelist from './employeelist'
import ServiceList from './serviceList'

const Home = () => {
  return (

    <div>
            <div className=' mx-auto container grid lg:grid-cols-2 gap-2 mt-[30px] p-[20px]'>
                <div className='bg-slate-100 rounded-md p-10 border shadow-sm'>
                    <p className='text-center'>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                    </p>
                </div>
                

                <div className='bg-slate-100 rounded-md p-10 border shadow-sm'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
                </div>
            </div>

        <div className=' mx-auto container grid lg:grid-cols-2 gap-2  p-[20px] mt-[20px] '>
                    <ServiceList/>

            <div className='bg-slate-100 rounded-md p-10 border shadow-sm grid grid-cols-1 w-full '>
                    <Employeelist />
            </div>
        </div>
        
        <div className=' mx-auto container grid lg:grid-cols-2 gap-2  p-[20px]  mt-[20px]'>
            <div className='bg-slate-100 rounded-md p-10 border shadow-sm'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
            </div>

            <div className='bg-slate-100 rounded-md p-10 border shadow-sm'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
            </div>
        </div>


    </div>
      

    
  )
}

export default Home

