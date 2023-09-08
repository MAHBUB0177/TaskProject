import { Table, Tag } from 'antd';
import React from 'react';

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      order: 3234567,
      product: 'Pizza',
      Quantity:20,
      price:'300',
      Quantity:20,
      status:true
    },
    
    {
        key: '1',
        name: 'Mike',
        order: 3234567,
        product: 'Pizza',
        Quantity:20,
        price:'300',
        status:true
      },
      {
        key: '1',
        name: 'Mike',
        order: 3234567,
        product: 'Pizza',
        Quantity:20,
        price:'300',
        status:false
      },

      {
        key: '1',
        name: 'Mike',
        order: 3234567,
        product: 'Pizza',
        Quantity:20,
        price:'300',
        status:false
      },
  ];

const columns = [
    {
        title: 'Customer',
        dataIndex: 'name',
        key: 'name',
        responsive: ['lg'], // Specify responsive behavior for this column (large screens and above)
    },
    {
        title: 'Order Id',
        dataIndex: 'order',
        key: 'order',
    },
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Quantity',
        dataIndex: 'Quantity',
        key: 'Quantity',
        responsive: ['lg'], 
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        responsive: ['md'], // Specify responsive behavior for this column (medium screens and above)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => (
            <Tag className='rounded-2xl text-white' style={{ background: status ? 'green' : 'red', padding: '1' }}>
                {status ? 'Paid' : 'Unpaid'}
            </Tag>
        ),
        // responsive: ['sm'], // Specify responsive behavior for this column (small screens and above)
    },
];

const Orderlist = () => {
    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                size="small"
                scroll={{ x: true }} // Enable horizontal scrolling
            />
        </div>
    );
}

export default Orderlist;
