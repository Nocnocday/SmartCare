import { CLASSROOM } from "../utils/constants";

// Khởi tạo danh sách classrooms từ CLASSROOM
const classrooms = Object.entries(CLASSROOM).map(([key, value]) => ({
  key,
  value,
}));

const initialState = {
  account: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "account":
      return {
        ...state,
        account: { ...action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
