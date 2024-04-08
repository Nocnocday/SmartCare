import { Mangement, InfomationAccount } from "../pages/admin";
import { pathAdmin } from "../utils/path";
const publicRoutes = [];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: Mangement },
  { path: pathAdmin.MANAGE_TEACHER, component: Mangement },
  { path: pathAdmin.INFO_ACCOUNT, component: InfomationAccount },
];

export { publicRoutes, privateRoute };
