import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {
  state = {
    employee: [],
    match: false,
    matchCount: 0
  };
  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextPerson();
  }
  loadNextPerson = () => {
    API.getRandomPerson()
      .then(res =>
        this.setState({
          employee: res.data.results
        })
      )
      .catch(err => console.log(err));
  };
  //{*/handleBtnClick={this.handleBtnClick}/>*/}
  render() {
    return (
      <div>
        <h1 className="text-center"></h1>
        <h3 className="text-center">

        </h3>
        <h1 className="text-center">
          employee directory
            </h1>
        <table>
          <thead>

          </thead>
        </table>
        {this.state.employee.map((emp) =>
          <li>{emp.name.first}</li>
        )
        }
      </div>
    );
  }
}

export default Discover;