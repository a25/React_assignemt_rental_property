import React from "react";
export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", errorInfo: "" };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (!this.state.error) {
      return <div>{this.props.children}</div>;
    }

    return (
      <div>
        {console.log(this.state)}
        <div>{JSON.stringify(this.state.error)}</div>
        <div>{JSON.stringify(this.state.errorInfo.componentStack)}</div>
      </div>
    );
  }
}
