import React from 'react';
import {
  Container,
  Content,
  Footer,
  List,
  ListItem,
  Body,
  Right,
  Text,
  Left,
} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';

function App({navigation}) {
  const route = [
    {
      name: 'Stok Produk',
      route: 'ReportStock',
    },
    {
      name: 'Riwayat Transaksi',
      route: 'TransactionHistory',
    },
    {
      name: 'Ringkasan',
      route: 'ReportIncome',
    },
  ];

  function RenderList({item}) {
    return (
      <ListItem button onPress={() => navigation.navigate(item.route)}>
        <Text style={styles.text}>{item.name}</Text>
      </ListItem>
    );
  }

  return (
    <Container style={styles.container}>
      <List>
        <FlatList
          data={route}
          keyExtractor={(item) => item.name}
          renderItem={RenderList}
        />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
});

export default App;
