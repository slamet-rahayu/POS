import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
  Button,
  Container,
  Icon,
  Body,
  Right,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Footer,
  FooterTab,
} from 'native-base';
const width = Dimensions.get('window').width;

function App({navigation}) {
  const transaction = {
    id: '#1238604',
    date: '14 Feb 2021',
    payment: 'Cash',
    products: [
      {
        name: 'Bakso Malang',
        price: 10000,
        qty: 1,
      },
      {
        name: 'Soto Lamongan',
        price: 12000,
        qty: 2,
      },
      {
        name: 'Soto Makasar',
        price: 12000,
        qty: 2,
      },
    ],
  };
  return (
    <Container style={styles.container}>
      <Content>
        <List>
          <ListItem itemDivider avatar>
            <Left style={{borderBottomWidth: 0}}>
              <Text style={styles.itemDividerText}>Detail Pembelian</Text>
            </Left>
            <Body style={{borderBottomWidth: 0}} />
            <Right style={{borderBottomWidth: 0}}>
              <Text />
            </Right>
          </ListItem>
          {transaction.products.map((v) => (
            <View key={v.name} style={styles.listitem}>
              <View>
                <Text style={[styles.text]}>{v.name}</Text>
                <Text note style={{fontSize: 11}}>
                  Rp. {v.price} x {v.qty}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 13}}>Rp. {v.qty * v.price}</Text>
              </View>
            </View>
          ))}
          <View
            style={[styles.listitem, {borderBottomWidth: 0, paddingBottom: 0}]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Subtotal :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Rp. 1.000.000</Text>
          </View>
          <View
            style={[styles.listitem, {borderBottomWidth: 0, paddingBottom: 0}]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Tax :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Rp. 0</Text>
          </View>
          <View
            style={[styles.listitem, {borderBottomWidth: 0, paddingBottom: 0}]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Total :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Rp. 1.000.000</Text>
          </View>
          <View
            style={[styles.listitem, {borderBottomWidth: 0, paddingBottom: 0}]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Dibayar :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Rp. 1.000.000</Text>
          </View>
          <View style={styles.listitem}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Kembalian :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Rp. 0</Text>
          </View>
          <ListItem itemDivider avatar>
            <Left style={{borderBottomWidth: 0}}>
              <Text style={styles.itemDividerText}>Detail Transaksi</Text>
            </Left>
            <Body style={{borderBottomWidth: 0}} />
            <Right style={{borderBottomWidth: 0}}>
              <Text />
            </Right>
          </ListItem>
          <View
            style={[styles.listitem, {borderBottomWidth: 0, paddingBottom: 0}]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Receipt :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>{transaction.id}</Text>
          </View>
          <View style={[styles.listitem]}>
            <Text style={[styles.textBold, {fontSize: 14}]}>Tanggal :</Text>
            <Text style={[styles.text, {fontSize: 14}]}>20 Feb 2021 16:05</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              bordered
              style={styles.button}
              full
              onPress={() => navigation.navigate('Struk', {print: true})}>
              <Text style={styles.textButton}>Cetak struk</Text>
            </Button>
            <Button
              bordered
              style={styles.button}
              full
              onPress={() => navigation.navigate('Struk', {print: false})}>
              <Text style={styles.textButton}>Kirim struk</Text>
            </Button>
          </View>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: 'red',
  },
  card: {
    marginTop: 60,
    borderWidth: 0.3,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 6,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13.5,
  },
  textBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#4b4b4b',
  },
  buttonContainer: {
    padding: 18,
  },
  textButton: {
    textTransform: 'capitalize',
    color: '#66c2ff',
  },
  button: {
    borderRadius: 4,
    borderColor: '#66c2ff',
    borderWidth: 1,
    marginBottom: 20,
  },
  idBox: {
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    padding: 15,
    marginBottom: 10,
  },
  listitem: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDividerText: {
    color: '#4b4b4b',
    fontWeight: 'bold',
  },
});

export default App;
