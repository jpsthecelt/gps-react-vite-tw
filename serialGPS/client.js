import React from "react";
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = io('http://localhost:8888');
    //this.socket.open();
    this.socket.on('serialdata', (data) => {
      // we get settings data and can do something with it
      this.setState({
        settings: data,
      })
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    ...
  }
}