import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = ()=> {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  },[]);//only one time called, as passed []

  let content;
  if(errorMessage) {
    content = <div>Error:{errorMessage}</div>;
  }else if(lat) {
    content = <SeasonDisplay lat={lat} />;
  }else {
    content = <Spinner message="Please accept location request" />;
  }

  return  <div className="border red">{content}</div>
}
/*
 class App extends React.Component {
  //first method
   // constructor(props) {
     // super(props);
      //this.state = {lat: 40, errMessage:''};
    //} 
  //just state not this.state
  //2nd method.
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request." />;
  }

  //required
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}*/
ReactDOM.render(<App />, document.querySelector("#root"));
