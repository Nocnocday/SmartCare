import React from "react";
import { Button, Input } from "../../atoms";
import { useSelector } from "react-redux";

function Header({heading,type,fnHeader}) {
  const account = useSelector((state) => state.account)
  return (
    <>
      {type === 1 && (
        <div className="flex justify-between px-[16px]">
          <h1 className="my-[0px] text-[40px]" id="title-page">{heading}</h1>
          
        </div>
      )}
      {type === 2 && (
        <div className="flex justify-between px-[16px]">
          <h1 className="my-[0px] text-[40px]" id="title-page">{heading}</h1>
        </div>
      )}
      {type === 3 && (
        <>
          <div className="flex">
            <img src={`${account.profile_image}`} alt="avatar" className="w-[62px] h-[62px] rounded-full"/>
            <div className="ml-[17px] mt-[-3px]">
              <p>{account.name}</p>
              <p class="mt-[14px]">Số điện thoại: {account.phone_number}</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <h6 className="text-[#D3E4CD]">Thông tin cá nhân</h6>
            
          </div>
        </>
      )}
    </>
  );
}

export default Header;
