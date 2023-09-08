import React from 'react'

import image1 from '../images/image6.webp'
import image2 from '../images/image7.webp'
import image3 from '../images/image8.webp'
import image4 from '../images/save6.webp'


const listItem = [
  {
      image: image1,
      amount: 'Chicken burger',
      title: ' $442'
  },
  {
      image: image2,
      amount: 'Hot Dog',
      title: '$440'
  },
  {
      image: image3,
      amount: 'Pizza',
      title: '$546'
  },
  {
      image:image4,
      amount: 'Coke',
      title: '$234'
  },
  
];
const Foodmenu = () => {
  return (

    <div>
{
  listItem?.map((item,index)=>
  <div className='flex justify-between gap-3 items-center p-1 h-[50px] border-b-2 border-red-300'>
      <div className='gap-2 flex '>
      <img src={item?.image} alt='profile' className='h-10 w-10 rounded-full'/> <span className='font-semibold text-slate-500'>{item?.amount}</span>  
      </div>

      <p className='rounded-xl bg-red-500 text-white font-medium px-2'>{item?.title}</p>



    </div>
  )
}

</div>
  )
}

export default Foodmenu