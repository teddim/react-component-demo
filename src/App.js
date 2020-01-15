import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import $ from 'jquery';
//https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/post_mount_with_component_did_mount.html

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
    console.log('****App constructor invoked');
  }
  componentDidMount() {
    console.log("****App component did mount");
    // To practice API calls - https://jsonplaceholder.typicode.com/todos/1

  }
  render() {
    console.log('****App rendered');
    return (
      <div>
        <Child />
      </div>
    )
  }
}

export default App;
