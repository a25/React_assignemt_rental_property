import { ON_FILESELECT } from "../constants.js";
export default data => {
  return {
    type: ON_FILESELECT,
    data
  };
};
