import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink,useNavigate } from "react-router-dom";
import { categoriesAdmin, categoriesAssisstant } from "./constants";
function Sidebar({account}) {
  const categories = account?.role[0] == 'admin' ? categoriesAdmin : categoriesAssisstant;
  const navigate = useNavigate()
 const handleLogout = ()=>{
  if (confirm("Bạn có muốn thoát?") == true) {
    sessionStorage.clear()
    navigate('/')
  } else {
  }
    
  }
  
  return (
    <div className="bg-sidebar h-[calc(100vh-10px)] p-5 fixed w-[280px] rounded-md">
      <div className="flex items-center">
        <div className="avatar">
          <img
            src={`${account?.profile_image}`}
            alt="name"
            className="w-[62px] h-[62px] rounded-full"
          />
        </div>
        <div className="ml-[12px]">
          <h3 className="text-secondColor">{account?.name}</h3>
          <p className="text-secondColor">
            Vai trò: <span>{account?.role[0]}</span>
          </p>
        </div>
      </div>
      <div className="pt-[20px] relative">
        {categories?.map((cate, index) => {
          const Icon = cate.icon;
          return (
            <NavLink
              key={index}
              to={cate.path}
              className={({ isActive }) =>
                `text-secondColor flex items-center items-center px-[8px] mb-[16px] py-[8px] hover:bg-sidebara cursor-pointer rounded-[4px] ${
                  isActive ? "bg-sidebara" : ""
                }`
              }
            >
              <Icon className="w-[30px] h-[30px]" />
              <p className="text-secondColor ml-[8px]">{cate.name}</p>
            </NavLink>
          );
        })}
      </div>
      <div className="absolute bottom-0 text-secondColor flex items-center items-center py-[8px] mb-[16px] bg-sidebara cursor-pointer rounded-[4px] w-[80%]" onClick={handleLogout}>
        <IoIosLogOut className="w-[30px] h-[30px]" />
        <p className="text-secondColor ml-[8px]">Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
