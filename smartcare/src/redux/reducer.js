const initialState = {
  account: {},
};
const rootReducer = (state = initialState, action) => {
  console.log("state", state);
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
