import { lazy } from "react";

// export { default as AssisstantLayout } from './AssisstantLayout'
const ManageFee = lazy(() => import("./ManageFee"));
const ManageSchedule = lazy(() => import("./ManageSchedule"));
// export { default as Stats } from '../admin/Statistics'
export { ManageFee,ManageSchedule };
