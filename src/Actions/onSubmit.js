import { ON_SUBMIT } from "../constants.js";
export default data => {
  return {
    type: ON_SUBMIT,
    data: data
  };
};
