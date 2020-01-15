import React, { Component } from 'react'
import './App.css'

class GrandChild extends Component {
  constructor(props){
    super(props)
    console.log('grandchild constructor invoked');

  }
  componentDidMount(){
    console.log('grandchild component did mount');
  }
  render() {
    console.log('grandchild rendered');
    return (
      <div>grandchild</div>
    )
  }
}

export default GrandChild;
