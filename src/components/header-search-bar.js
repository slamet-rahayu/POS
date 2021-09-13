import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Icon, Item, Input, View} from 'native-base';

function App(props) {
  return (
    <Header hasTabs searchBar rounded style={styles.header}>
      <TouchableOpacity onPress={() => props.onBackPress()}>
        <Icon style={styles.iconBack} name="arrow-back" />
      </TouchableOpacity>
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          style={styles.input}
          selectionColor="black"
        />
      </Item>
      {props.right && <View style={styles.right}>{props.right}</View>}
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#66c2ff',
    alignItems: 'center',
    height: 80,
    elevation: 0,
  },
  iconBack: {
    marginRight: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  right: {
    paddingHorizontal: 10,
  },
});

export default App;
