import {
  DesktopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import {  useEffect, useState } from "react";
import {  AiFillHome} from "react-icons/ai";
import { BiMoney, BiSupport } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";

import {AiOutlineMenu} from 'react-icons/ai'

import {MdRestaurantMenu} from 'react-icons/md'



const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Menu", "/home", <DesktopOutlined />),
  getItem("Menu Layout", "sub1", <MdRestaurantMenu />, [
    getItem("Menu Layput1", "/menulist"),
  
    
  ]),
  // getItem("Menu Layout", "/list", <DesktopOutlined />),
  getItem("Order List", "/dfghj", <BiMoney />),
  getItem("Chef Page", "/jfghj", <BiSupport />),
  
  getItem("Customer Review", "/sdfghjk", <BiMoney />),
  getItem("Upload Menu", "/sdfgh", <HiUsers />),
  getItem("My Users", "/wertyjk", <UserOutlined />),
];

const BaseLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
 

  const onClick = (e) => {
    navigate(`${e.key}`);
  };
 

 
 useEffect(() => {
  function getElementWidth() {
    const myElement = document.getElementById('layoutRef');

    const width = myElement.offsetWidth;

    if(width <= 769){
      setCollapsed(true)
    }
    else{
      setCollapsed(false)
    }
  }
 
  getElementWidth();
 
  window.addEventListener('resize', getElementWidth);
 
  return () => {
    window.removeEventListener('resize', getElementWidth);
  };


}, []);

  return (
    <Layout 
      id={'layoutRef'}
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="custom-scrollbars__content"
        style={{
          // overflowY: "scroll",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{
            height: 42,
          }}>
            {collapsed ?  
            <div className="flex justify-center items-center mt-[25px] ">
            <Link to={"/home"}>
            <AiOutlineMenu className="text-orange-400 h-[30px] w-[30px]"/>
            </Link>
          </div>
          : 
          <div className="flex justify-center items-center mt-[20px] mx-7 mb-10 rounded-sm" >
              <Link to={"/home"}> 
              <div className="flex justify-between gap-1">
              <p className=" text-orange-400 font-bold text-xl">Tomatus</p>
              <AiOutlineMenu className="text-orange-400 h-[30px] w-[30px]"/>
              </div>
              
            </Link>
          </div> }
          </div>
          
     

        <Menu
          theme="dark"
          className="text-md"
          defaultSelectedKeys={["/home"]}
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>

      <Layout className="site-layout h-[100%]">
        <Header
          style={{
            padding: 0,
            background: "none",
          }}
        >
          <LayoutHeader collapsed={collapsed} />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
          <div
          style={{
            // padding: 24,
            minHeight: "100vh",
          }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            padding: 0,
            textAlign: "center",
          }}
        >
          <LayoutFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
