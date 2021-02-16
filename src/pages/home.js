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
            <h1 className="text-center">Make New Friends</h1>
            <h3 className="text-center">
              Thumbs up on any pups you'd like to meet!
            </h3>
            <h1 className="text-center">
              employee directory
            </h1>
            
          </div>
        );
      }
    }
    
    export default Discover;