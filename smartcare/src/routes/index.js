import { Mangement, InfomationAccount } from "../pages/admin";
import { Login } from "../pages/login";
import { pathAdmin,common } from "../utils/path";
const publicRoutes = [
  { path: common.LOGIN, component: Login },
];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: Mangement },
  { path: pathAdmin.MANAGE_TEACHER, component: Mangement },
  { path: pathAdmin.INFO_ACCOUNT, component: InfomationAccount },
];

export { publicRoutes, privateRoute };
