import React from "react";
import {Input,Button} from "../../atoms";


function Header() {
    return ( <div className="flex justify-between px-[16px]">
        <h1 className="my-[0px] text-[40px]">Quản lý giáo viên</h1>
        <div className="flex flex-col mt-[20px]">
            <Input type='text' classInput='w-[300px]' placeholder="Nhập nội dung tìm kiếm"/>
            <Button>Tạo tài khoản</Button>
        </div>
    </div> );
}

export default Header;