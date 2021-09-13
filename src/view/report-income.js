import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Card,
  Container,
  Icon,
  Body,
  Right,
  Content,
  Text,
  List,
  ListItem,
  Left,
  View,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import formatRupiah from '../lib/format-rupiah';

function App() {
  const products = [
    {
      name: 'Soto Ayam',
      category: 'Soto',
      price: 100000,
      sold: 92,
    },
    {
      name: 'Bakso Malang',
      category: 'Bakso',
      price: 100000,
      sold: 71,
    },
    {
      name: 'Bakmi',
      category: 'Bakso',
      price: 100000,
      sold: 55,
    },
  ];
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider style={styles.dateContainer}>
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
          <ListItem itemDivider>
            <Text style={{fontWeight: 'bold'}}>Ringkasan</Text>
          </ListItem>
          <View style={styles.listitem}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Total transaksi :
            </Text>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.listitem}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Produk terjual :
            </Text>
            <Text style={styles.text}>100</Text>
          </View>
          <View style={styles.listitem}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Total pendapatan :
            </Text>
            <Text style={styles.text}>Rp. 100.000.000</Text>
          </View>
          <ListItem itemDivider>
            <Text style={{fontWeight: 'bold'}}>Produk terjual</Text>
          </ListItem>
          {products.map((v) => (
            <View style={styles.listitem} key={v.name}>
              <View>
                <Text style={[styles.text, {fontFamily: 'Poppins-SemiBold'}]}>
                  {v.name}
                </Text>
                <Text note style={[styles.text, {fontSize: 12}]}>
                  {v.sold} x Rp. {formatRupiah(v.price)}
                </Text>
              </View>
              <View>
                <Text style={styles.text}>
                  Rp {formatRupiah(v.price * v.sold)}
                </Text>
              </View>
            </View>
          ))}
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  listitem: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  dateForward: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  date: {
    width: '43%',
  },
  text: {
    fontSize: 14,
  },
});

export default App;
