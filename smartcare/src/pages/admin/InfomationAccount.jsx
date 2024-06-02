import React, { useState } from "react";
import { useSelector } from "react-redux";
import withLayout from "../../components/layouts";
import { InputRead } from "../../components/molecule";
function InfomationAccount() {
  const account = useSelector((state) => state.account);
  const [data, setData] = useState(() => {
    return [
      { field: "Tên", value: account.name,disable:true },
      { field: "Số điện thoại", value: account.phone_number,disable:true },
      { field: "Vai trò", value: account?.role?.[0],disable:true },
      { field: "Địa chỉ", value: account.address,disable:true },
      { field: "Ngày sinh", value: account.day_of_birth,disable:true },
      { field: "Email", value: account.email,disable:true },
      { field: "Giới tính", value: account.gender == 0 ? "Nam" : "Nữ",disable:true },
    ];
  });

  return (
      <div className="rounded-lg overflow-y-auto relative  rounded-lg shadow bg-[#fafafa] h-[500px] mb-[10px] p-[16px]">
        {data?.length > 0 &&
          data.map((item, index) => (
            <InputRead
              key={index}
              textLabel={item.field}
              classLabel={"w-[15%]"}
              value={item.value}
              classInputRead={"width:100% mb-[20px]"}
              disable={item.disable}
            ></InputRead>
          ))}
      </div>
  );
}
const fnHeader = [
  () => {
    setData((data) => {
      return data.map((item, index) => {
        if ([1, 3, 4, 5].includes(index)) {
          return { ...item, disable: false };
        } else {
          return item;
        }
      });
    })
  },
  () => {
    console.log("fn2");
  },
];

export default withLayout(InfomationAccount, '', 3, fnHeader);

