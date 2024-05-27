import withLayout from "../../components/layouts";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Table from "../../components/atoms/table";
import { colummnsAccount } from "./constants";
import { useLayoutEffect, useRef, useState } from "react";
import { getManagers, removeManager } from "../../services/managerServices";
import ConfirmModal from "../../components/molecule/comfirmModal";
import { showToast } from "../../utils/utils";
import {  useNavigate } from "react-router-dom";

function ManageTeacher() {
  const navigate = useNavigate();
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
              role: roles?.[0]?.name,
            };
          });
          setDatas(newData);
          setCurrentPage(res?.current_page);
          setTotal(res?.total);
        }
      })();
    } catch (err) {}
  }, [currentPage, total, reload]);

  const idManager = useRef(null);
  const columnAction = [
    {
      icon: CiEdit,
      classIc: "cursor-pointer text-[#05b64c] inline-block",
      handleClick: (id) => {
        navigate('/admin/create-account', { state: { id } })
      },
    },
    {
      icon: FaRegTrashAlt,
      classIc: "cursor-pointer text-[#ff5050] inline-block",
      handleClick: (id) => {
        setOpen(true);
        idManager.current = id;
      },
    },
  ];
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClose = () => {
    setOpen(false);
    idManager.current = null;
  };

  const handleConfirm = async () => {
    const res = await removeManager(idManager.current);
    if (res.status == 404) {
      showToast("Học sinh không tồn tại!");
    } else {
      showToast("Xóa thành công");
      setReload((reload) => !reload);
    }
    idManager.current = null;
    setOpen(false);
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
      <ConfirmModal
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default withLayout(ManageTeacher, "Quản lý tài khoản", 1, () => {});
