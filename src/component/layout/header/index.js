import {
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Form, Input, message, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LayoutHeader = ({ collapsed }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const[agentInfo,setAgentInfo]=useState()
  const navigate = useNavigate();

   // set user data

  // get user data
  const items = [
    {
      label: "Profile",
      key: "/dashboard/profile",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined />,
    },
  ];

  const _handleMenuClick = (e) => {
    if (e.key === "2") {
      // _handelLogout();
    } else {
      navigate(`${e.key}`);
    }
  };

  const menuProps = {
    items,
    onClick: _handleMenuClick,
  };
  return (
    <div
      className={`bg-white shadow-md fixed min-w-full z-40 ${
        collapsed ? "pr-24 duration-300" : "pr-52 duration-300"
      }`}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="ml-3">
          <Link to={"/dashboard/search"}>
            {/* <img src={logo} alt="companylogo" style={{ height: "35px" }} /> */}
          </Link>
        </div>

        <div>
          <Form  id="form_data" className="-mb-5">
            <Form.Item>
              <Input
                value={searchTerm}
                className="border-2 border-pink-500 caret-pink-500 lg:w-96 p-2"
                style={{
                  borderRadius: "50px",
                }}
                suffix={
                  <SearchOutlined
                    style={{ fontSize: "20px", color: "purple" }}
                  />
                }
                placeholder="Search..."
                
              />
            </Form.Item>
          </Form>
        </div>

        <div className="flex justify-between gap-2">
        
        <div className="mr-3 ">
        <Space wrap>
          <Dropdown.Button
            menu={menuProps}
            icon={<UserOutlined />}
            placement="bottomRight"
            arrow
            size="large"
           
          > 
          <p className="font-bold text-orange-500">
          Tomatus

          </p>
          </Dropdown.Button>
        </Space>
      </div>
        </div>
       
      </div>
    </div>
  );
};

export default LayoutHeader;
