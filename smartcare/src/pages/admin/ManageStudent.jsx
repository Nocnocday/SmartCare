import { useEffect, useLayoutEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import withLayout from "../../components/layouts";
import { IoIosLogOut } from "react-icons/io";
import Table from "../../components/atoms/table";
import { colummns } from "./constants";
import { studentsService } from "../../services";
import { CLASSROOM } from "../../utils/constants";
function ManageStudent() {
  // const datas = [
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nữ",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nữ",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nam",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nam",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nữ",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nam",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nam",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nữ",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nữ",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  //   {
  //     id: "123",
  //     name: "Nguyễn Văn A",
  //     parent: "Nguyễn Văn B",
  //     class: "Mầm",
  //     img: "https://placehold.co/100x100",
  //     gender: "Nam",
  //     address: "Đà Nẵng",
  //     date: "01-01-2022",
  //     phone: "0987654321",
  //     email: "ABC@gmail.com",
  //   },
  // ];
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useLayoutEffect(() => {
    try {
      (async () => {
        const res = await studentsService(currentPage);
        if (res?.data) {
          const newData = res?.data?.map((student)=>{
            const { parent, ...rest } = student;
            return ({
              ...rest,
              gender: student.gender == 0 ? "Nam" : "Nữ",
              parentId:parent.id,
              parent:parent.name,
              classroom:CLASSROOM[student.classroom_id]
            })
          })
          setDatas(newData);
          setCurrentPage(res?.current_page);
          setTotal(res?.total);
        }
      })();
    } catch (err) {}
  }, [currentPage, total]);

  console.log("dataaaaa", datas);
 const onPageChange = (page)=>{
  setCurrentPage(page)
  }
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
      <Table
        totalPages={total == 0 ? 1 : Number(total / 10)}
        colummns={colummns}
        datas={datas}
        columnAction={columnAction}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default withLayout(ManageStudent, "Quản lý học sinh", 1, () => {});
