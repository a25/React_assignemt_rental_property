const ON_CHANGE = "ON_CHANGE";
const ON_FILESELECT = "ON_FILESELECT";
const ON_BLUR = "ON_BLUR";
const ON_SUBMIT = "ON_SUBMIT";
const ON_CLEAR = "ON_CLEAR";
const ERROR = {
  FIRST_NAME:
    "First name should be an alphabatical string with 1-15 characters",
  LAST_NAME: "Last name should be an alphabatical string with 1-15 characters",
  EMAIL_ID: "Enter a valid email address",
  CONTACT_NUMBER: "Contact number shold be a 10-digit number",
  ADDRESS: "Enter valid address",
  FILE_TYPE: "Invalid File"
};
module.exports = {
  ON_CHANGE,
  ON_FILESELECT,
  ON_BLUR,
  ON_SUBMIT,
  ON_CLEAR,
  ERROR
};
