import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "Dashboard",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        {this.state.pageName}
        <div>user table will be displayed here</div>
      </div>
    );
  }
}

export default Dashboard;
