import React, { Component } from 'react';
import { Connect } from 'react-redux'

class LibraryList extends Components {
  render() {
    return (

    )
  }
}

// React-redux connect is used to connect component to redux store
// Calls function connect and returns another function invoked with LibraryList
export default connect()(LibraryList);
