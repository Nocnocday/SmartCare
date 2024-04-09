import React from "react";
import Layout from "../../components/layouts";
import { InputRead } from "../../components/molecule";

function InfomationAccount() {
  const data = [
    { field: "Tên", value: "Nguyễn Như Ngọc" },
    { field: "Số điện thoại", value: "0987665432" },
    { field: "Vai trò", value: "Admin" },
    { field: "Địa chỉ", value: "Đà Nẵng" },
    { field: "Ngày sinh", value: "01-01-2001" },
    { field: "Email", value: "ngoccute@gmail.com" },
    { field: "Giới tính", value: "Nữ" },
  ];

  return (
    <Layout>
      <div className="rounded-lg overflow-y-auto relative  rounded-lg shadow bg-[#fafafa] h-[500px] mb-[10px] p-[16px]">
        {data?.length > 0 &&
          data.map((item, index) => (
            <InputRead
              key={index}
              textLabel={item.field}
              classLabel={"w-[15%]"}
              value={item.value}
              classInputRead={"width:100% mb-[20px]"}
            ></InputRead>
          ))}
      </div>
    </Layout>
  );
}

export default InfomationAccount;
