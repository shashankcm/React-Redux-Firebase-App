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
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_FAILURE":
      console.log("SIGNUP_FAILURE", action.err);
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
