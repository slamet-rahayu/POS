import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import NfcManager from 'react-native-nfc-manager';
import {GetTag} from '../lib/nfc';
import ModalPayment from '../components/payment-modal';
import {Container, Button, Text, Content, View} from 'native-base';
import {useRoute} from '@react-navigation/native';

function App({navigation}) {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const route = useRoute();

  const {tag, get, cancel} = GetTag();

  useEffect(() => {
    async function checkNFC() {
      const isEnabled = await NfcManager.isEnabled();
      const isSupported = await NfcManager.isSupported();
      if (!isEnabled || !isSupported) {
        setModal(true);
        const errorMsg = !isEnabled
          ? 'Silahkan hidupkan NFC'
          : 'Perangkat tidak mendukung NFC';
        setError(errorMsg);
      }
    }

    checkNFC();
  }, []);

  useEffect(() => {
    if (tag) {
      setModal(false);
      cancel();
      navigation.popToTop();
      navigation.navigate('TransactionSuccess');
    }
  }, [tag, navigation, cancel]);

  function handlePress() {
    if (!error) {
      get();
      setModal(true);
    }
  }

  function onDismiss() {
    cancel();
    setModal(false);
    if (error) {
      navigation.goBack();
    }
  }

  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <View style={{marginTop: 100}}>
          <Text style={styles.t1}>
            {route.params?.isTopUp ? 'Top Up' : 'Pembayaran'}
          </Text>
        </View>
        <View style={[styles.card, styles.boxShadow]}>
          <View style={styles.form}>
            <Text style={styles.t2}>Nominal</Text>
            <Text style={styles.rupiah}>Rp.</Text>
            <TextInput
              selectionColor="black"
              autoFocus
              keyboardType="decimal-pad"
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <Button style={styles.button} onPress={() => handlePress()}>
                <Text>Lanjutkan</Text>
              </Button>
            </View>
          </View>
        </View>
      </Content>
      <ModalPayment
        isVisible={modal}
        error={error}
        onDismiss={() => onDismiss()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 35,
  },
  t1: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
    color: '#393e46',
    fontFamily: 'Poppins-SemiBold',
  },
  t2: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  input: {
    fontSize: 15,
    paddingLeft: 35,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 6,
    backgroundColor: '#f8f8f8',
  },
  footerTab: {
    backgroundColor: '#66c2ff',
  },
  footerText: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 16,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
  },
  modalVIew: {
    // height: 180,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  modalFooterText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 14,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#333333',
  },
  modalHeader: {
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    paddingTop: 14,
    paddingBottom: 14,
  },
  modalFooter: {
    borderTopWidth: 0.3,
    borderColor: 'grey',
    paddingTop: 15,
    paddingBottom: 15,
  },
  modalBody: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  img: {
    height: 180,
    width: 180,
  },
  imgWrapper: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSaldo: {
    fontSize: 25,
    marginTop: 10,
  },
  card: {
    borderWidth: 0.6,
    borderRadius: 8,
    padding: 15,
    borderColor: '#ededed',
    backgroundColor: '#fcfcfc',
  },
  form: {
    marginVertical: 25,
  },
  button: {
    backgroundColor: '#66c2ff',
    borderRadius: 6,
    marginTop: 25,
  },
  rupiah: {
    position: 'absolute',
    top: 53,
    zIndex: 999,
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default App;
