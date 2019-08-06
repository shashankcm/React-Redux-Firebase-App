const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login Error", action.err);
      return {
        ...state,
        authError: action.err
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authReducer: null
      };
    default:
      return state;
  }
};

export default authReducer;
