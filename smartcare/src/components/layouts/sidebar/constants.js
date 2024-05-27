import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { pathAdmin,pathAssisstant } from "../../../utils/path";

export const categoriesAdmin = [
    {
        name: "Thống kê",
        icon:GoHomeFill,
        path:pathAdmin.STATISTICS,
    },
    {
        name: "Xem thông tin",
        icon:RiAccountCircleLine,
        path:pathAdmin.INFO_ACCOUNT,
    },
    {
        name: "Tạo tài khoản",
        icon:BiSolidMessageSquareEdit,
        path:pathAdmin.CREATE_ACCOUNT,
    },
    {
        name: "Quản lý tài khoảns",
        icon:HiUserGroup,
        path:pathAdmin.MANAGE_TEACHER,
    },
    {
        name: "Quản lý học sinh",
        icon:HiUserGroup,
        path:pathAdmin.MANAGE_STUDENT,
    }
]

export const categoriesAssisstant = [
    {
        name: "Thống kê",
        icon:GoHomeFill,
        path:pathAssisstant.STATISTICS,
    },
    {
        name: "Quản lý lịch ăn",
        icon:RiAccountCircleLine,
        path:pathAssisstant.MANAGE_SCHEDULE,
    },
    {
        name: "Quản lý học phí",
        icon:BiSolidMessageSquareEdit,
        path:pathAssisstant.MANAGE_FEE,
    }
]