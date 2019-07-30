export const createProject = project => {
  //console.log("In Actions", project);
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
