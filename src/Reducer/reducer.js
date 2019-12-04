import {
  ON_CHANGE,
  ON_FILESELECT,
  ON_BLUR,
  ON_SUBMIT,
  ON_CLEAR,
  ERROR
} from "../constants";
import { combineReducers } from "redux";
const defaultState = {
  firstName: "",
  lastName: "",
  picture: "",
  number: "",
  emailId: "",
  address: ""
};
const defaultErrors = {
  firstName: { length: "" },
  lastName: { length: "" },
  picture: { fileType: "" },
  number: { lenght: "" },
  emailId: { inValid: "" },
  address: { length: "" }
};

const formState = (state = defaultState, action) => {
  switch (action.type) {
    case ON_CLEAR: {
      return defaultState;
    }

    case ON_CHANGE: {
      return { ...state, [action.data.field]: action.data.data };
    }

    default:
      return state;
  }
};
const validateState = (fieldName, prevData, fieldData) => {
  switch (fieldName) {
    case "firstName": {
      const nameValidator = /^[a-zA-Z]{1,15}$/;
      if (!nameValidator.test(fieldData)) {
        return { length: ERROR.FIRST_NAME };
      }
      return { length: false };
    }

    case "lastName": {
      const nameValidator = /^[a-zA-Z]{1,15}$/;
      if (!nameValidator.test(fieldData)) {
        return { length: ERROR.LAST_NAME };
      }
      return { length: false };
    }

    case "picture": {
      const fileExtValidator = /.*(\.jpg|\.jpeg|\.png)$/g;
      if (!fileExtValidator.test(fieldData)) {
        return { fileType: ERROR.FILE_TYPE };
      }
      return { fileType: false };
    }

    case "number": {
      const phoneNumValidator = /^[0-9]{10}$/;
      if (!phoneNumValidator.test(fieldData)) {
        return { length: ERROR.CONTACT_NUMBER };
      }
      return { length: false };
    }

    case "emailId": {
      const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailValidator.test(fieldData)) {
        return { inValid: ERROR.EMAIL_ID };
      }
      return { inValid: false };
    }

    case "address": {
      const addressValidator = /^.{1,200}$/;
      if (!addressValidator.test(fieldData)) {
        return { length: ERROR.ADDRESS };
      }
      return { length: false };
    }
    default:
      return { ...prevData };
  }
};
const errorState = (state = defaultErrors, action) => {
  switch (action.type) {
    case ON_BLUR: {
      return {
        ...state,
        [action.data]: validateState(
          action.data,
          state[action.data],
          action.value
        )
      };
    }

    case ON_FILESELECT: {
      return {
        ...state,
        [action.data.field]: validateState(
          action.data.field,
          state[action.data.field],
          action.data.data[1] /// here fileselector data contains array
        )
      };
    }

    default: {
      return { ...state };
    }
  }
};

const stateArray = (state = [], action) => {
  switch (action.type) {
    case ON_SUBMIT: {
      return [...state, { ...action.data }];
    }
    default: {
      return state;
    }
  }
};

let reducer = combineReducers({ formState, errorState, stateArray });
export default reducer;
