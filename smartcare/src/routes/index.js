import { InfomationAccount, ManageStudent, ManageTeacher, Stats } from "../pages/admin";
import {ManageFee } from "../pages/assisstant";
import { Login } from "../pages/login";
import { common, pathAdmin,pathAssisstant } from "../utils/path";
const publicRoutes = [
  { path: common.LOGIN, component: Login },
];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: ManageStudent },
  { path: pathAdmin.MANAGE_TEACHER, component: ManageTeacher },
  { path: pathAdmin.INFO_ACCOUNT, component: InfomationAccount },
  { path: pathAdmin.STATISTICS, component: Stats },
  { path: pathAssisstant.MANAGE_FEE, component:ManageFee  },
];

export { privateRoute, publicRoutes };

