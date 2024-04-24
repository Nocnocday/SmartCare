import { lazy } from "react";

// export { default as AssisstantLayout } from './AssisstantLayout'
const ManageFee = lazy(() => import("./ManageFee"));

// export { default as ManageSchedule } from './ManageSchedule'
// export { default as Stats } from '../admin/Statistics'
export { ManageFee };
