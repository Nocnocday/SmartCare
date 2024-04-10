import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import Table from "../../components/atoms/table";
import Layout from "../../components/layouts";

import { colummns } from "./constants";

function Management({ navigate, location }) {
  const datas = [
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nữ",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nữ",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nam",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nam",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nữ",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nam",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nam",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nữ",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nữ",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
    {
      id: "123",
      name: "Nguyễn Văn A",
      parent: "Nguyễn Văn B",
      class: "Mầm",
      img: "https://placehold.co/100x100",
      gender: "Nam",
      address: "Đà Nẵng",
      date: "01-01-2022",
      phone: "0987654321",
      email: "ABC@gmail.com",
    },
  ];
  const columnAction = [
    {
      icon: HiUserGroup,
      classIc: "cursor-pointer text-[#05b64c] inline-block",
      handleClick: () => {
        console.log("abcd");
      },
    },
    {
      icon: IoIosLogOut,
      classIc: "cursor-pointer text-[#ff5050] inline-block",
      handleClick: () => {
        console.log("abcd");
      },
    },
  ];
  return (
    <Layout>
      <Table colummns={colummns} datas={datas} columnAction={columnAction}/>
    </Layout>
  );
}

export default Management;
