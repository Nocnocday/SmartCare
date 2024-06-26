import { InfomationAccount, ManageStudent, ManageTeacher, Stats,CreateAccount } from "../pages/admin";
import {ManageFee,ManageSchedule } from "../pages/assisstant";
import { Login } from "../pages/login";
import { common, pathAdmin,pathAssisstant} from "../utils/path";
const publicRoutes = [
  { path: common.LOGIN, component: Login },
];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: ManageStudent },
  { path: pathAdmin.MANAGE_TEACHER, component: ManageTeacher },
  { path: pathAdmin.INFO_ACCOUNT, component: InfomationAccount },
  { path: pathAdmin.STATISTICS, component: Stats },
  { path: pathAdmin.CREATE_ACCOUNT, component: CreateAccount },
  { path: pathAssisstant.MANAGE_FEE, component:ManageFee  },
  { path: pathAssisstant.MANAGE_SCHEDULE, component:ManageSchedule  },
];

export { privateRoute, publicRoutes };

