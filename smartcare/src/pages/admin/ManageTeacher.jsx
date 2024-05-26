import { HiUserGroup } from "react-icons/hi2";
import withLayout from "../../components/layouts";
import { IoIosLogOut } from "react-icons/io";
import Table from "../../components/atoms/table";
import { colummnsAccount } from "./constants";
import { useLayoutEffect, useState } from "react";
import { getManagers } from "../../services/managerServices";

function ManageTeacher() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [reload, setReload] = useState(true);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    try {
      (async () => {
        const res = await getManagers(currentPage);
        if (res?.data) {
          const newData = res?.data?.map((student) => {
            const { roles, ...rest } = student;
            return {
              ...rest,
              gender: student.gender == 0 ? "Nam" : "Nữ",
              role:roles?.[0]?.name
            };
          });
          setDatas(newData);
          setCurrentPage(res?.current_page);
          setTotal(res?.total);
        }
      })();
    } catch (err) {}
  }, [currentPage, total, reload]);
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
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Table
        totalPages={Math.ceil(Number(total / 10))}
        colummns={colummnsAccount}
        datas={datas}
        columnAction={columnAction}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default withLayout(ManageTeacher, "Quản lý tài khoản", 1, () => {});
