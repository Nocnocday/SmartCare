import React from "react";
import Layout from "../../components/layouts";
import { InputRead } from "../../components/molecule";
import { useSelector } from "react-redux";
function InfomationAccount() {
  const account = useSelector((state) => state.account)
  const data = [
    { field: "Tên", value: account.name },
    { field: "Số điện thoại", value: account.phone_number },
    { field: "Vai trò", value: account?.role?.[0] },
    { field: "Địa chỉ", value: account.address },
    { field: "Ngày sinh", value: account.day_of_birth },
    { field: "Email", value: account.email },
    { field: "Giới tính", value: account.gender == 0 ? "Nam" : "Nữ" },
  ];

  return (
    <Layout heading={""} type={3}>
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
