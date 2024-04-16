import { InfomationAccount, ManageStudent, ManageTeacher, Stats } from "../pages/admin";
import { Login } from "../pages/login";
import { common, pathAdmin } from "../utils/path";
const publicRoutes = [
  { path: common.LOGIN, component: Login },
];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: ManageStudent },
  { path: pathAdmin.MANAGE_TEACHER, component: ManageTeacher },
  { path: pathAdmin.INFO_ACCOUNT, component: InfomationAccount },
  { path: pathAdmin.STATISTICS, component: Stats },
];

export { privateRoute, publicRoutes };

