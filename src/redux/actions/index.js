export const SubmitMobileNumber = number => {
  return {
    type: 'SUBMIT_MOBILE',
    payload: number,
  };
};

export const SubmitUserDetails = obj => {
  return {
    type: 'SUBMIT_DETAILS',
    payload: obj,
  };
};

export const FinalSubmit = () => {
  return {
    type: 'FINAL_SUBMIT',
  };
};
