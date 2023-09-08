import React from 'react'
import image1 from '../images/team1.jpg.webp'
import image2 from '../images/team1.jpg.webp'
import image3 from '../images/team1.jpg.webp'
import image4 from '../images/team1.jpg.webp'

const listItem=[
    {
        image:image1,
        name:'emily waker jon',
        address:'target'
    },
    {
        image:image2,
        name:'tamim rahman khan',
        address:'target'
    },
    {
        image:image3,
        name:'emily rahman khan',
        address:'target'
    },
    {
        image:image4,
        name:'sabbir rahman khan',
        address:'target'
    },
    {
        image:image1,
        name:'sabbir rahman khan',
        address:'target'
    }
]

const Employeelist = () => {
  return (
    <div >
         

        {
            listItem?.map((item,index)=>
<div class="flex items-center p-4 bg-white rounded h-[50px] mt-2 " key={index}>
                    <img src={item?.image} alt='profile' className='h-10 w-10 rounded-full'/>       
                    <div class="flex-grow flex flex-col ml-4">
                        <div class="flex items-center justify-between">
                            <div>
                            <p class="text-gray-500 font-medium">{item.name}</p>
                            <p class="text-gray-500 ">{item.address}</p>

                            </div>
                            <span class="p-1 text-sm font-semibold ml-2 rounded-xl bg-slate-300">+12.6%</span>
                        </div>
                    </div>
                </div>
            )
        }
             </div>   

    
  )
}

export default Employeelist