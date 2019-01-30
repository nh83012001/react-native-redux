import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.title}
      />
    );
  }
}

// Taking global state and mapping it to props
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// React-redux connect is used to connect component to redux store
// Calls function connect and returns another function invoked with LibraryList
// export default connect(mapStateToProps)(LibraryList);
export default connect(mapStateToProps)(LibraryList);
// export default LibraryList;
