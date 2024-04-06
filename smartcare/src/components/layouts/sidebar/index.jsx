import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { categoriesAdmin } from "./constants";
function Sidebar() {
  return (
    <div className="bg-sidebar h-screen p-5 relative">
      <div className="flex justify-between items-center">
        <div className="avatar">
          <img
            src="https://placehold.co/100x100"
            alt="name"
            className="w-[62px] h-[62px] rounded-full"
          />
        </div>
        <div className="">
          <h3 className="text-secondColor">Nguyễn Như Ngọc</h3>
          <p className="text-secondColor">
            Vai trò: <span>Admin</span>
          </p>
        </div>
      </div>
      <div className="pt-[20px] relative">
        {categoriesAdmin?.map((cate, index) => {
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
      <div className="absolute bottom-0 text-secondColor flex items-center items-center py-[8px] mb-[16px] bg-sidebara cursor-pointer rounded-[4px] w-[80%]">
        <IoIosLogOut className="w-[30px] h-[30px]" />
        <p className="text-secondColor ml-[8px]">Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
