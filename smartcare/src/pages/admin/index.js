import { lazy } from "react";
// export { default as AdminLayout } from './AdminLayout'
const ManageTeacher = lazy(() => import("./ManageTeacher"));
const ManageStudent = lazy(() => import("./ManageStudent"));
const Stats = lazy(() => import("../coordinator/Statistics"));
const InfomationAccount = lazy(() => import("./InfomationAccount"));
const CreateAccount = lazy(() => import("./CreateAccount"));

export { InfomationAccount, ManageStudent, ManageTeacher, Stats,CreateAccount };
