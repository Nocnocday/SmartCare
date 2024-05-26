const initialState = {
  account: {},
  classrooms: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "account":
      return {
        ...state,
        account: { ...action.payload },
      };
    case "CLASSROOM":
      return {
        ...state,
        classrooms: [...action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
