export default (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_MOBILE':
      return {...state, MobileNo: action.payload};
    case 'SUBMIT_DETAILS':
      return {
        ...state,
        Name: action.payload.Name,
        UPI_ID: action.payload.UPI_ID,
        Profession: action.payload.Profession,
      };

    case 'FINAL_SUBMIT':
      return {};
    default:
      return state;
  }
};
