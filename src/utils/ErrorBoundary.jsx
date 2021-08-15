import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };

    if (this.props.showError === false) {
      this.state.error = null;
      this.state.errorInfo = null;
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({ error: error, errorInfo: info });
    this.props.history.push("/productList");
  };

  render() {
    if (this.state.errorInfo) {
      return <center>메인 페이지로 이동 중입니다.</center>;
    } else {
      return this.props.children;
    }
  }
}

export default withRouter(ErrorBoundary);
