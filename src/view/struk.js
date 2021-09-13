import React, {useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Button, Container, Content, Icon, Text, View} from 'native-base';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import {useRoute} from '@react-navigation/native';
import {
  BluetoothEscposPrinter,
  BluetoothManager,
} from 'react-native-bluetooth-escpos-printer';

function App() {
  const viewRef = useRef();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const products = [
    {
      name: 'Bakso Malang',
      price: 120000,
      qty: 2,
    },
    {
      name: 'Bakso Urat',
      price: 150000,
      qty: 5,
    },
    {
      name: 'Soto Lamongan',
      price: 180000,
      qty: 2,
    },
  ];

  const print = async (uri) => {
    setLoading(true);
    try {
      await BluetoothEscposPrinter.printPic(uri, {});
      setLoading(false);
    } catch (error) {
      alert(error);
      console.log(error);
      setLoading(false);
    }
  };

  const handlePress = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });
      if (route.params?.print) {
        print(uri);
      } else {
        await Share.open({url: uri});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content style={styles.content}>
        <View style={{marginBottom: 20}}>
          <Text style={[styles.text, styles.textPreview]}>Preview</Text>
        </View>
        <View style={styles.struk} ref={viewRef}>
          <View style={styles.titleWrapper}>
            <Text style={[styles.text, {textAlign: 'center'}]}>Nama Toko</Text>
            <Text style={[styles.text, {textAlign: 'center'}]}>
              Jl. Jalan, Jakarta Selatan
            </Text>
            <Text style={[styles.text, {textAlign: 'center'}]}>
              Telp: 08001818818
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, styles.text1]}>Receipt:</Text>
              <Text style={[styles.text, styles.text1]}>#127866826</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, styles.text1]}>Date:</Text>
              <Text style={[styles.text, styles.text1]}>20 Feb 2021 16:43</Text>
            </View>
          </View>
          {products.map((v) => (
            <View style={styles.textProductContainer} key={v.name}>
              <View>
                <Text style={[styles.text, styles.text1]}>{v.name}</Text>
                <Text style={[styles.text, styles.text2]}>
                  {v.qty} x {v.price}
                </Text>
              </View>
              <Text style={[styles.text, styles.text2]}>{v.qty * v.price}</Text>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, styles.text1]}>Subtotal :</Text>
              <Text style={[styles.text, styles.text1]}>1.000.000</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, styles.text1]}>Tax :</Text>
              <Text style={[styles.text, styles.text1]}>100.000</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, styles.text1]}>Total :</Text>
              <Text style={[styles.text, styles.text1]}>1.100.000</Text>
            </View>
          </View>
          <View style={styles.notesContainer}>
            <Text style={[styles.text, styles.text1, styles.textNote]}>
              #Notes tambahan
            </Text>
          </View>
        </View>
        <View>
          {loading && <ActivityIndicator size="small" color="red" />}
          <Button full style={styles.button} onPress={() => handlePress()}>
            <Text>{route.params?.print ? 'Print' : 'Share'}</Text>
            <Icon
              name={route.params?.print ? 'print' : 'share-alt'}
              type="FontAwesome5"
            />
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  struk: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 120,
  },
  titleWrapper: {
    marginTop: 40,
    marginBottom: 10,
  },
  textProductContainer: {
    marginVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  totalContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    borderTopWidth: 0.5,
  },
  text: {
    // color: '#4d4d4d',
  },
  text1: {
    fontSize: 14,
  },
  text2: {
    fontSize: 13,
  },
  textPreview: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 25,
    marginBottom: 80,
    borderRadius: 6,
    backgroundColor: '#66c2ff',
  },
  notesContainer: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  textNote: {
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default App;
