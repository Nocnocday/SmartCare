import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import Table from "../../components/atoms/table";

import { Button, Input } from "../../components/atoms";
import withLayout from "../../components/layouts";
import { colummns } from "./constants";

function ManageFee() {
  const datas = [
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Due",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Due",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Due",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Due",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      amount: "150$",
      status: "Paid",
      date: "01-01-2022",
      email: "ABC@gmail.com",
    },
  ];
  const columnAction = [
    {
      icon: IoPencil,
      classIc: "cursor-pointer text-[#05b64c] inline-block",
      handleClick: () => {
      },
    },
    {
      icon: IoTrashOutline,
      classIc: "cursor-pointer text-[#ff5050] inline-block",
      handleClick: () => {
        console.log("abcd");
      },
    },
  ];
  const HeaderTable = () => {
    return (
      <div className="m-[20px]">
        <div className="flex items-center justify-between">
          <Input placeholder={"Nhập tên học sinh"} classInput={"w-[300px]"} />
          <div className="flex items-center">
            <Input
              type={"date"}
              pattern="\d{1,2}/\d{1,2}/\d{4}"
              placeholder="dd/mm/yyyy"
            />
            <Button
              classButton={"h-[40px] mx-[10px]"}
              style={{ "margin-top": 0 }}
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <IoTrashOutline
          className={`cursor-pointer text-[#ff5050] block ml-auto mt-[16px] mr-[10px]`}
          onClick={()=>{}}
        />
      </div>
    );
  };
  return (
      <Table
        styleTable={{ width: "100%" }}
        checkbox={true}
        colummns={colummns}
        datas={datas}
        columnAction={columnAction}
        search={<HeaderTable />}
        renderCssCustom={(status) => {
          return `cursor-pointer p-[10px] rounded-[16px] ${
            status == "Paid" ? "bg-paidColor" : "bg-dueColor"
          }`;
        }}
      />
  );
}

export default withLayout(ManageFee, "Quản lý học phí", 2, () => {});

