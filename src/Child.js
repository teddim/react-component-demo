import React, { Component } from 'react'
import './App.css'
import GrandChild from './Grandchild';

class Child extends Component {
  constructor(props){
    super(props)
    console.log('child constructor invoked');
  }
  componentDidMount(){
    console.log('child component did mount');
  }
  render() {
    console.log('Child rendered');

    return (
      <div>
        child
        <GrandChild />
      </div>
    )
  }
}

export default Child;
