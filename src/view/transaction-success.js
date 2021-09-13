import React, {useEffect} from 'react';
import {StyleSheet, BackHandler} from 'react-native';
import {View, Container, Content, Icon, Text, Button} from 'native-base';

function App({navigation}) {
  return (
    <Container>
      <Content>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Icon name="checkmark-circle-outline" style={styles.icon} />
            <Text style={[styles.textLarge, styles.text]}>
              Transaksi Berhasil
            </Text>
            <Text>20 Feb 2021 16:43</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBox}>
              <View style={styles.listitem}>
                <Text style={styles.text}>Pembayaran</Text>
                <Text>Cash</Text>
              </View>
              <View style={styles.listitem}>
                <Text style={styles.text}>Total</Text>
                <Text>Rp. 100.000</Text>
              </View>
              <View style={styles.listitem}>
                <Text style={styles.text}>Diterima</Text>
                <Text>Rp. 100.000</Text>
              </View>
              <View style={styles.listitem}>
                <Text style={styles.text}>Kembalian</Text>
                <Text>Rp. 100.000</Text>
              </View>
              <View
                style={[styles.listitem, {marginTop: 80, marginBottom: 14}]}>
                <Button bordered full style={styles.button}>
                  <Text style={styles.textButton}>Cetak struk</Text>
                </Button>
                <Button
                  bordered
                  full
                  style={styles.button}
                  onPress={() => navigation.navigate('Struk')}>
                  <Text style={styles.textButton}>Kirim struk</Text>
                </Button>
              </View>
              <View>
                <Button
                  full
                  bordered
                  style={styles.buttonFull}
                  onPress={() => navigation.navigate('TransactionDetail')}>
                  <Text style={styles.textButton}>Lihat detail transaksi</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: '#00c210',
    fontSize: 120,
    marginBottom: 40,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 60,
  },
  textLarge: {
    fontSize: 30,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#454545',
  },
  card: {
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 40,
    marginTop: 60,
  },
  bottomBox: {

  },
  listitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    flex: 1,
  },
  textButton: {
    textTransform: 'capitalize',
    color: '#66c2ff',
    fontWeight: 'bold'
  },
  button: {
    width: '48%',
    borderRadius: 6,
    borderColor: '#66c2ff',
  },
  buttonFull: {
    borderRadius: 6,
    borderColor: '#66c2ff',
  }
});

export default App;
