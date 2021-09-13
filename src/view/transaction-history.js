import React from 'react';
import {List, ListItem, Container, Body, Right, Text, Icon} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

function App({navigation}) {
  const products = [
    {
      id: 1,
      name: 'Penjualan',
      date: '20 Feb 2020',
      method: 'cash',
      total: 100000,
    },
    {
      id: 2,
      name: 'Penjualan',
      date: '21 Feb 2020',
      method: 'cash',
      total: 200000,
    },
    {
      id: 3,
      name: 'Top Up',
      date: '21 Feb 2020',
      method: 'cash',
      total: 300000,
    },
  ];

  function RenderList({item}) {
    return (
      <ListItem
        avatar
        button
        onPress={() => navigation.navigate('TransactionDetail')}>
        <Body>
          <Text style={styles.text}>{item.name}</Text>
          <Text note style={[styles.text, styles.note]}>
            {item.date}
          </Text>
        </Body>
        <Right>
          <Text style={styles.textBold}>Rp. {item.total}</Text>
          <Text note>{item.method}</Text>
        </Right>
      </ListItem>
    );
  }

  return (
    <Container>
      <List>
        <ListItem itemDivider style={{paddingTop: 20, paddingBottom: 20}}>
          <DatePicker
            style={styles.date}
            customStyles={{
              dateIcon: {
                display: 'none',
              },
              dateInput: {
                borderRadius: 6,
              },
            }}
          />
          <Icon name="arrow-forward" style={styles.dateForward} />
          <DatePicker
            style={styles.date}
            customStyles={{
              dateIcon: {
                display: 'none',
              },
              dateInput: {
                borderRadius: 6,
              },
            }}
          />
        </ListItem>
        <FlatList
          data={products}
          renderItem={RenderList}
          keyExtractor={(item) => item.id}
        />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
  textBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  note: {
    fontSize: 12,
  },
  dateForward: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  date: {
    width: '43%',
  },
  dateIcon: {
    display: 'none',
  },
  dateInput: {
    borderRadius: 6,
  },
});

export default App;
