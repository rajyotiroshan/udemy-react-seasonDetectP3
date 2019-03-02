import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //first method
 /*  constructor(props) {
    super(props);
    this.state = {lat: 40, errMessage:''};
  }   */
//just state not this.state
//2nd method.
  state = {lat : null, errMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
     position => this.setState({lat: position.coords.latitude}),
     err => this.setState({errMessage: err.message})
  );
  }


    //required
  render() {

    if(this.state.errMessage && !this.state.lat) {
        return (
            <div>Error: {this.state.errMessage}</div>
        );
    }

    if( !this.state.errMessage && this.state.lat) {
        return <SeasonDisplay  lat={this.state.lat}/>
    }

    return (
        <div>
           Loading!</div>
    );;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
