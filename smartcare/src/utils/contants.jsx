import { pathAdmin, common, pathAssisstant } from "./path";
import icons from "./icons";
const {
  AiOutlineDashboard,
  MdGroups,
  IoMdCreate,
  AiOutlineUnorderedList,
  IoIosStats,
  MdPendingActions,
  BsCheckAll,
  TbRun,
  BiBadgeCheck,
  MdCancelScheduleSend,
  VscCalendar,
} = icons;

export const adminSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Tạo tài khoản",
    path: `/${pathAdmin.ADMIN}/${pathAdmin.CREATE_ACCOUNT}`,
    icon: <VscCalendar size={20} />,
  },

  {
    id: 2,
    type: "SINGLE",
    text: "Quản lý học sinh",
    path: `/${pathAdmin.ADMIN}/${pathAdmin.MANAGE_STUDENT}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 3,
    type: "SINGLE",
    text: "Quản lý giáo viên",
    path: `/${pathAdmin.ADMIN}/${pathAdmin.MANAGE_TEACHER}`,
    icon: <AiOutlineUnorderedList size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Thống kê",
    path: `/${pathAdmin.ADMIN}/${common.DASHBOARD}`,
    icon: <IoIosStats size={20} />,
  },
];

export const assisstantSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Quản lý lịch ăn",
    path: `/${pathAssisstant.ASSISSTANT}/${pathAssisstant.MANAGE_SCHEDULE}`,
    icon: <IoMdCreate size={19} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Quarn lý học phí",
    path: `/${pathAssisstant.ASSISSTANT}/${pathAssisstant.MANAGE_FEE}`,
    icon: <AiOutlineUnorderedList size={19} />,
  },
  {
    id: 3,
    type: "SINGLE",
    text: "Thống kê",
    path: `/${pathAssisstant.ASSISSTANT}/${common.DASHBOARD}`,
    icon: <IoIosStats size={20} />,
  },
];

// export const status = [
//   {
//     id: 1,
//     text: "Chờ duyệt",
//     icon: <MdPendingActions size="21" />,
//   },
//   {
//     id: 2,
//     text: "Đã duyệt",
//     icon: <BsCheckAll size="21" />,
//   },
//   {
//     id: 3,
//     text: "Đang diễn ra",
//     icon: <TbRun size="21" />,
//   },
//   {
//     id: 4,
//     text: "Đã kết thúc",
//     icon: <BiBadgeCheck size="21" />,
//   },
//   {
//     id: 5,
//     text: "Đã hủy",
//     icon: <MdCancelScheduleSend size="21" />,
//   },
// ];

// export const optionsGender = [
//   { value: false, label: "Nam" },
//   { value: true, label: "Nữ" },
// ];

// export const optionsRoles = [
//   { value: 3, label: "Học sinh" },
//   { value: 2, label: "Người tạo sự kiện" },
// ];
