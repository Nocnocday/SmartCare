import Mangement from "../pages/admin/Mangement";
import { pathAdmin } from "../utils/path";
const publicRoutes = [];

const privateRoute = [
  { path: pathAdmin.MANAGE_STUDENT, component: Mangement },
  { path: pathAdmin.MANAGE_TEACHER, component: Mangement },
];

export { publicRoutes, privateRoute };
