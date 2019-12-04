import React from "react";
export default props => {
  return (
    <div className={"text text-danger " + (!props.data ? "d-none" : "")}>
      {props.data}
    </div>
  );
};
