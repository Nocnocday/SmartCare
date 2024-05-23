import { HiUserGroup } from "react-icons/hi2";
import withLayout from "../../components/layouts";
import { IoIosLogOut } from "react-icons/io";
import Table from "../../components/atoms/table";
import { colummns } from "./constants";

function ManageTeacher() {
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
      handleClick: () => {},
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
    <>
      <Table colummns={colummns} datas={datas} columnAction={columnAction} />
    </>
  );
}

export default withLayout(ManageTeacher, "Quản lý giáo viên", 1, () => {});
