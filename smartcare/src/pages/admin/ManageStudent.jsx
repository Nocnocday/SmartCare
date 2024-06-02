import { useLayoutEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Table from "../../components/atoms/table";
import withLayout from "../../components/layouts";
import ConfirmModal from "../../components/molecule/comfirmModal";
import ModalForm from "../../components/molecule/formModal";
import {
  addStudent,
  getStudents,
  removeStudent,
  updateStudent,
} from "../../services/studentsService";
import { IoMdAdd } from "react-icons/io";
import { showToast } from "../../utils/utils";
import { colummns } from "./constants";
import { useSelector } from "react-redux";

function ManageStudent() {
  const CLASSROOM = useSelector((state) => state.classrooms);
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [reload, setReload] = useState(true);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const idStudent = useRef(null);
  const listClassroom = {}
  CLASSROOM.forEach(classroom => {
    listClassroom[classroom.id] = classroom.name
  });
  useLayoutEffect(() => {
    try {
      (async () => {
        const res = await getStudents(currentPage);
        if (res?.data) {
          const newData = res?.data?.map((student) => {
            const { parent, ...rest } = student;
            console.log(student.classroom_id);
            return {
              ...rest,
              gender: student.gender == 0 ? "Nam" : "Nữ",
              parentId: parent.id,
              parent: parent.name,
              classroom: listClassroom[student.classroom_id],
            };
          });
          setDatas(newData);
          setCurrentPage(res?.current_page);
          setTotal(res?.total);
        }
      })();
    } catch (err) {}
  }, [currentPage, total, reload]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const columnAction = [
    {
      icon: CiEdit,
      classIc: "cursor-pointer text-[#05b64c] inline-block",
      handleClick: (id) => {
        setOpenAdd(true);
        idStudent.current = id;
      },
    },
    {
      icon: FaRegTrashAlt,
      classIc: "cursor-pointer text-[#ff5050] inline-block",
      handleClick: async (id) => {
        setOpen(true);
        idStudent.current = id;
      },
    },
  ];

  const handleClose = () => {
    setOpen(false);
    idStudent.current = null;
  };

  const handleConfirm = async () => {
    const res = await removeStudent(idStudent.current);
    if (res.status == 404) {
      showToast("Học sinh không tồn tại!");
    } else {
      showToast(res.message);
      setReload((reload) => !reload);
    }
    idStudent.current = null;
    setOpen(false);
  };

  const handleAddStudent = async (formData) => {
    if (idStudent.current) {
      const res = await updateStudent(formData, idStudent.current);
      console.log(res);
      if (res.status == 422) {
        showToast(res.data.message);
      }
      if (res.student) {
        showToast("Cập nhật thành công");
        setReload((reload) => !reload);
      }
    } else {
      const res = await addStudent(formData);
      if (res.status == 422) {
        showToast(res.data.message);
      }
      if (res.student) {
        showToast("Thêm thành công");
        setReload((reload) => !reload);
      }
    }
    idStudent.current = null;
  };

  return (
    <div className="border shadow rounded relative ">
      <IoMdAdd
        className="absolute top-0 right-0 text-[20px] cursor-pointer"
        style={{ transform: "translate(calc(-12px),calc(-100% - 4px))" }}
        onClick={() => setOpenAdd(true)}
      />
      <Table
        totalPages={Math.ceil(Number(total / 10))}
        colummns={colummns}
        datas={datas}
        columnAction={columnAction}
        onPageChange={onPageChange}
      />
      <ConfirmModal
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />

      {openAdd && (
        <ModalForm
          open={openAdd}
          onClose={() => setOpenAdd(false)}
          onAddStudent={handleAddStudent}
          idStudent={idStudent.current}
        />
      )}
    </div>
  );
}

const ManageStudentPage = () => {
  const WrappedComponent = withLayout(
    ManageStudent,
    "Quản lý học sinh",
    1,
    () => {}
  );

  return (
    <>
      <WrappedComponent />
    </>
  );
};
export default ManageStudentPage;
