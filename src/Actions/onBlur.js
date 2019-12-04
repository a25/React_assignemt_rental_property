import { ON_BLUR } from "../constants.js";
export default (data, value) => {
  return {
    type: ON_BLUR,
    data,
    value
  };
};
