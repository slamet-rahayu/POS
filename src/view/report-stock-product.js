import React from 'react';
import {
  List,
  ListItem,
  Container,
  Body,
  Right,
  Text,
  Content,
} from 'native-base';
import {FlatList, StyleSheet, StatusBar} from 'react-native';
import HeaderSearch from '../components/header-search-bar';

function App({navigation}) {
  const products = [
    {
      name: 'Bakso Solo',
      category: 'Bakso',
      stock: 10,
    },
    {
      name: 'Soto Lamongan',
      category: 'Soto',
      stock: 12,
    },
  ];

  function RenderList({item}) {
    return (
      <ListItem avatar>
        <Body>
          <Text>{item.name}</Text>
          <Text note numberOfLines={1}>
            {item.category}
          </Text>
        </Body>
        <Right>
          <Text>{item.stock}</Text>
        </Right>
      </ListItem>
    );
  }

  return (
    <Container style={styles.container}>
      <HeaderSearch onBackPress={() => navigation.goBack()} />
      <StatusBar barStyle="light-content" backgroundColor="#66c2ff" />
      <Content>
        <List>
          <FlatList
            data={products}
            renderItem={RenderList}
            keyExtractor={(item) => item.name}
          />
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  footer: {
    height: 200,
  },
  footerTab: {
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#4b4b4b',
  },
});

export default App;
