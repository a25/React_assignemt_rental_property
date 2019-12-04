import React from "react";
import { connect } from "react-redux";
const Table = props => {
  return (
    props.userData &&
    props.userData.length > 0 && (
      <table
        border="1"
        className="mt-5 col-sm-11 mx-auto table table-striped table-bordered"
      >
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Profile Picture</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
        </thead>
        <tbody>
          {props.userData.map((data, id) => {
            return (
              <tr key={id.toString()}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>
                  <img alt="property_image" src={data.picture[0]} />
                </td>
                <td>{data.number}</td>
                <td>{data.emailId}</td>
                <td>{data.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

const mapStateToProps = state => {
  return {
    userData: state.stateArray
  };
};
const TableContainer = connect(
  mapStateToProps,
  null
)(Table);
export default TableContainer;
