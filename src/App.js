import React, { Component} from "react";
import { Map, GoogleApiWrapper} from '@react-google-maps/api';

const style ={
  width : "100%",
  height :"100%"
};
class  App extends Component{
  render(){

    return <>
    <Map initialCenter={{
      latitude : 36.806496,
      longitude: 10.181532,
    }}
    google={this.props.google}
    zoom={14}
    containStyle={style}
    />
    ;
    </>
  }
}

export default GoogleApiWrapper({
  apiKey : "AIzaSyADGgPfKbhLkiPIh3hDKoeOxVt3YXRU8Ao",
}) (App);