import React from "react";
import ReactForm from "./Form.jsx";
import Table from "./Table.jsx";
export default class App extends React.Component {
  render() {
    return (
      <>
        <ReactForm />
        <Table />
      </>
    );
  }
}
