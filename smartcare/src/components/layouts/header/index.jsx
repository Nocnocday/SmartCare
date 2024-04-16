import React from "react";
import { Button, Input } from "../../atoms";

function Header({heading,type}) {
  return (
    <>
      {type === 1 && (
        <div className="flex justify-between px-[16px]">
          <h1 className="my-[0px] text-[40px]" id="title-page">{heading}</h1>
          <div className="flex flex-col mt-[20px]">
            <Input
              type="text"
              classInput="w-[300px]"
              placeholder="Nhập nội dung tìm kiếm"
            />
            <Button>Tạo tài khoản</Button>
          </div>
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
            <img src="https://placehold.co/100x100" alt="avatar" />
            <div className="ml-[17px] mt-[-3px]">
              <p>Ngocdangyew</p>
              <p class="mt-[14px]">Số điện thoại: 0987654321</p>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <h6 className="text-[#D3E4CD]">Thông tin cá nhân</h6>
            <div>
              <Button classButton="mx-[6px]">Chỉnh sửa</Button>
              <Button classButton="mx-[6px]">Xóa</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
