import React from "react";
import onChangeEvent from "../Actions/onChange.js";
import onFileSelectEvent from "../Actions/onFileSelect.js";
import onBlurEvent from "../Actions/onBlur.js";
import onSubmitEvent from "../Actions/onSubmit.js";
import onClear from "../Actions/onClear.js";
import ErrorDisplay from "./ErrorDisplay";
import { connect } from "react-redux";
let Form = props => {
  return (
    <>
      <h3 className="text-center text-info">Form</h3>
      <form
        className="pt-2 border border-light mx-auto col-md-5 col-sm-7 col-xs-12"
        autoComplete="off"
      >
        <span className="text-danger">* All fields are mandatory</span>
        <div className="pt-2 form-group">
          <label htmlFor="firstName">First Name</label>
          <span className="text-danger">*</span>
          <input
            className={
              "form-control col-12" +
              (props.errorState.firstName.length ? "border border-danger" : "")
            }
            type="text"
            id="firstName"
            maxLength="15"
            value={props.formState.firstName}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name="firstName"
          />
          <ErrorDisplay data={props.errorState.firstName.length} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <span class="text-danger">*</span>
          <input
            type="text"
            className={
              "form-control col-12" +
              (props.errorState.lastName.length ? "border border-danger" : "")
            }
            maxLength="15"
            id="lastName"
            value={props.formState.lastName}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name="lastName"
          />
          <ErrorDisplay data={props.errorState.lastName.length} />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture</label>
          <span class="text-danger">*</span>
          <div>
            <input
              //  className="form-control"
              type="file"
              id="picture"
              value={props.formState.picture ? props.formState.picture[1] : ""}
              onChange={props.onSelect}
              name="picture"
            />
          </div>
          <ErrorDisplay data={props.errorState.picture.fileType} />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <span class="text-danger">*</span>

          <input
            className={
              "form-control col-12" +
              (props.errorState.number.length ? "border border-danger" : "")
            }
            type="text"
            id="number"
            maxLength="10"
            value={props.formState.number}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name="number"
          />
          <ErrorDisplay data={props.errorState.number.length} />
        </div>
        <div className="form-group">
          <label htmlFor="email">ID</label>
          <span class="text-danger">*</span>

          <input
            type="text"
            id="email"
            className={
              "form-control col-12" +
              (props.errorState.emailId.inValid ? "border border-danger" : "")
            }
            value={props.formState.emailId}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name="emailId"
          />
          <ErrorDisplay data={props.errorState.emailId.inValid} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <span class="text-danger">*</span>

          <input
            type="text"
            id="address"
            maxLength="200"
            className={
              "form-control col-12" +
              (props.errorState.address.length ? "border border-danger" : "")
            }
            onChange={props.onChange}
            value={props.formState.address}
            onBlur={props.onBlur}
            name="address"
          />
          <ErrorDisplay data={props.errorState.address.length} />
        </div>
        <div>
          <button
            className={
              props.isFormInvalid || !props.isFormFilled
                ? "btn btn-secondary"
                : "btn btn-primary"
            }
            disabled={props.isFormInvalid || !props.isFormFilled}
            type="button"
            onClick={() => {
              props.onSubmit(props.formState);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  const errorState = { ...state.errorState };
  const formState = { ...state.formState };
  const { firstName, lastName, picture, number, emailId, address } = formState;
  return {
    formState,
    errorState,
    isFormFilled:
      firstName && lastName && picture && number && emailId && address,
    isFormInvalid:
      errorState.firstName.length ||
      errorState.lastName.length ||
      errorState.picture.fileType ||
      errorState.number.length ||
      errorState.emailId.inValid ||
      errorState.address.length
  };
};

const mapActionToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(onSubmitEvent({ ...data }));
      dispatch(onClear());
      return;
    },

    onChange: event => {
      return dispatch(
        onChangeEvent({ field: event.target.name, data: event.target.value })
      );
    },

    onSelect: event => {
      dispatch(
        onChangeEvent({
          field: event.target.name,
          data: [URL.createObjectURL(event.target.files[0]), event.target.value]
        })
      );

      dispatch(
        onFileSelectEvent({
          field: event.target.name,
          data: [URL.createObjectURL(event.target.files[0]), event.target.value]
        })
      );
      return;
    },

    onBlur: event => {
      return dispatch(onBlurEvent(event.target.name, event.target.value));
    }
  };
};
let appContainer = connect(
  mapStateToProps,
  mapActionToProps
)(Form);
export default appContainer;
