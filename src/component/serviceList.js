import React from 'react'
import { BiMoney, BiSupport } from "react-icons/bi";





const listItem = [
    {
        image: <BiMoney />,
        amount: '7056',
        title: ' Order Received'
    },
    {
        image: <BiMoney />,
        amount: '2625',
        title: 'Today Delivered'
    },
    {
        image: <BiMoney />,
        amount: '9846',
        title: 'New Customer'
    },
    {
        image: <BiMoney />,
        amount: '42750',
        title: 'Net Earning'
    },
    {
        image: <BiMoney />,
        amount: 'Total:9765',
        title: 'Daily Sales'
    },
    {
        image: <BiMoney />,
        amount: 'Total:6765',
        title: 'Daily Expense'
    }
];
const ServiceList = () => {
  return (

    <div>

<div className='bg-slate-100 rounded-md p-10 border shadow-sm grid md:grid-cols-2 gap-1  text-center items-center'>
    {listItem?.map((item,index)=>
    
    <div class="border p-4 rounded-lg shadow-sm w-[250px] flex gap-3" key={index}>
    <div class="text-center items-center mb-3">
    <h2 style={{color:'gray',fontSize:'3.5em'}}>
        {item?.image}
    </h2>
    </div>

    <div class="text-center items-center mb-3">
        <p class="text-start font-mono text-xl opacity-75 text-black font-medium">{item?.amount}</p>
        <p class="text-start font-mono   opacity-75 text-slate-500 text-md font-bold">{item?.title}</p>
    </div>
    
</div>
    )
   }


  
    </div>
    </div>
    
  )
}

export default ServiceList