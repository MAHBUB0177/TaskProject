import React, { useState } from 'react'

import { product } from './menu'

import {BsThreeDotsVertical} from 'react-icons/bs'
import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaFileUpload} from 'react-icons/fa';
import TextArea from 'antd/es/input/TextArea';

const Menulist = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
   const _handleCancel = () => {
     setIsModalOpen(false);
   };

   const customMaskStyle = {
    backgroundColor: 'transparent', // Set the background color to transparent
    backdropFilter: 'none', // Remove backdrop filter (optional)
  };
  return (
    <div className="bg-white mt-[20px]">

    <div className="container">
      <div className="mt-4 flex items-center justify-between">
        
      </div>
    </div>

    

    <div>
    <section
      id="Projects"
      className="w-fit mt-[10px] mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 justify-items-center justify-center gap-y-5 gap-x-14  mb-2"
    >
      {product?.map((item, i) => (

<div class="  shadow-md p-6 border bg-slate-100 w-[200px]" >
<div className='flex justify-end cursor-pointer' onClick={() => {
              setIsModalOpen(true);
            }}>
    <BsThreeDotsVertical />
</div>
<div class="font-semibold flex justify-center" >
    <img src={item.image} alt='cardimage' className='h-[100px] w-[100px] rounded-full'/>
</div>
<div class="font-normal flex justify-center" >Gross volume</div>
</div>
       
      ))}
    </section>

   
    </div>
  

<Modal title='Add Menu List'
          open={isModalOpen}
          width={600}
          onCancel={_handleCancel}
          footer={null}
          className="flex justify-center  borderb-3 border-slate-300"
          maskClosable={false}
          maskStyle={customMaskStyle}
          closeIcon={<AiFillCloseCircle style={{ fontSize: "20px" }} />}
          
        >
            <div className="border-b-2 border-#bbc5d3 mb-5"></div>
          <div className='flex justify-between gap-4 mt-[30px]'> 
          <div >
          {/* <FaFileUpload /> */}

          <Form.Item
                name="passportCopy"
              >
                <Upload
                  size="large"
                  maxCount={1}
               
                >
                   <FaFileUpload
                      style={{color:'gray',fontSize:'7.5em',marginTop:'50px'}} 
                      />
                </Upload>
              </Form.Item>
              <p className='text-red-500 underline text-lg'>Add Product</p>
          </div>

          <div>
          <Form
      
      name="control-hooks"
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Product Price" >
        <Input />
      </Form.Item>
      <Form.Item name="note" label="Product price" >
        <Input />
      </Form.Item>
      <Form.Item name="Product Ctegory" label="Gender" >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Select.Option value="male">food</Select.Option>
          <Select.Option value="female">meet</Select.Option>
          <Select.Option value="other">fish</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
      
      <Form.Item >
        
       <div className='flex justify-end '>
        <button className='bg-orange-500 p-1 w-[100px] h-[30px] rounded-sm text-white font-medium'>Menu Upload</button>
       </div>
      </Form.Item>
    </Form>
          </div>
          </div>
        </Modal>
    
  </div>
  )
}

export default Menulist