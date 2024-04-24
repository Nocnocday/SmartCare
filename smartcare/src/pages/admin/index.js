import { lazy } from "react";
// export { default as AdminLayout } from './AdminLayout'
const ManageTeacher = lazy(() => import("./ManageTeacher"));
const ManageStudent = lazy(() => import("./ManageStudent"));
const Stats = lazy(() => import("../assisstant/Statistics"));
const InfomationAccount = lazy(() => import("./InfomationAccount"));

export { InfomationAccount, ManageStudent, ManageTeacher, Stats };
