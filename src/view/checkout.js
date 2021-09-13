import React, {useState, useEffect} from 'react';
import {
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  View,
  Input,
  Segment,
} from 'native-base';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Switch,
} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import NfcManager from 'react-native-nfc-manager';
import {GetTag} from '../lib/nfc';
import ModalPayment from '../components/payment-modal';
const height = Dimensions.get('window').height;

function App({navigation}) {
  const [discount, setDiscount] = useState(false);
  const [tax, setTax] = useState(false);
  const [isCash, setIsCash] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const data = [
    {
      name: 'Soto Ayam',
      price: 1000,
      qty: 10,
    },
    {
      name: 'Soto Sapi',
      price: 2000,
      qty: 8,
    },
  ];

  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
  };

  const {tag, get, cancel} = GetTag();

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

  useEffect(() => {
    if (tag) {
      setModal(false);
      cancel();
      navigation.popToTop();
      navigation.navigate('TransactionSuccess');
    }
  }, [tag, navigation, cancel]);

  function handlePress() {
    checkNFC();
    if (!error) {
      get();
      setModal(true);
    }
  }

  function onDismiss() {
    cancel();
    setModal(false);
  }

  const RenderList = ({item}) => {
    return (
      <ListItem>
        <Left style={{borderBottomWidth: 0}}>
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text note style={[styles.text, styles.note]}>
              Rp. {item.price} x 2
            </Text>
          </View>
        </Left>
        <Right style={{borderBottomWidth: 0}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Icon style={styles.icon} name="add" />
              </TouchableOpacity>
              <Text style={[styles.qty, styles.textBold]}>2</Text>
              <TouchableOpacity style={styles.button}>
                <Icon style={styles.icon} name="remove" />
              </TouchableOpacity>
            </View>
            <Text note style={[styles.text, styles.note]}>
              Rp 2.000
            </Text>
          </View>
        </Right>
      </ListItem>
    );
  };

  return (
    <Container style={styles.container}>
      <Content>
        <List>
          <FlatList
            data={data}
            renderItem={RenderList}
            keyExtractor={(item) => item.name}
          />
        </List>
      </Content>
      <Footer style={{height: !isExpanded ? 60 : 600}}>
        <FooterTab style={styles.staticDetail}>
          <GestureRecognizer
            onSwipeUp={() => setIsExpanded(true)}
            onSwipeDown={() => setIsExpanded(false)}
            // onSwipeLeft={() => setIsExpanded((prev) => !prev)}
            // onSwipeRight={() => setIsExpanded((prev) => !prev)}
            config={config}
            // onSwipe={() => setIsExpanded((prev) => !prev)}
            style={{flex: 1, padding: 15}}>
            <TouchableOpacity
              onPress={() => setIsExpanded((prev) => !prev)}
              style={{
                position: 'absolute',
                justifyContent: 'center',
                width: '100%',
                flexDirection: 'row',
              }}>
              <Icon
                name={`chevron-${isExpanded ? 'down' : 'up'}`}
                style={{color: 'grey'}}
              />
            </TouchableOpacity>
            {isExpanded && (
              <>
                {/* <View style={styles.footerBox}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={[styles.textBold, styles.textDetail]}>
                      Pembayaran:
                    </Text>
                  </View>
                  <View style={{width: 120}}>
                    <Form>
                      <Item picker>
                        <Picker
                          mode="dropdown"
                          onValueChange={(val) => setIsCash(val)}
                          style={[styles.textBold, {marginRight: -12}]}
                          iosIcon={<Icon name="arrow-down" />}
                          placeholder="Select your SIM"
                          placeholderStyle={{color: '#bfc6ea'}}
                          placeholderIconColor="#007aff"
                          selectedValue={isCash}>
                          <Picker.Item label="Cash" value={true} />
                          <Picker.Item label="Member card" value={false} />
                        </Picker>
                      </Item>
                    </Form>
                  </View>
                </View> */}
                {/* {isCash && (
                  <View style={styles.footerBox}>
                    <View style={{justifyContent: 'center'}}>
                      <Text style={[styles.textBold, styles.textDetail]}>
                        Cash :
                      </Text>
                    </View>
                    <View
                      style={{width: 200, height: 40, flexDirection: 'row'}}>
                      <Input
                        style={[styles.input]}
                        selectionColor="#393e46"
                        keyboardType="decimal-pad"
                      />
                    </View>
                  </View>
                )} */}
                <View style={[styles.footerBox, {marginTop: 25}]}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={[styles.textBold, styles.textDetail]}>
                      Name :
                    </Text>
                  </View>
                  <View style={{width: 250, height: 40, flexDirection: 'row'}}>
                    <Input style={[styles.input]} selectionColor="#393e46" />
                  </View>
                </View>
                <View style={styles.footerBox}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={[styles.textBold, styles.textDetail]}>
                      Diskon :
                    </Text>
                  </View>
                  <Switch
                    trackColor={{true: '#66c2ff', false: 'grey'}}
                    thumbColor={discount && '#66c2ff'}
                    value={discount}
                    onValueChange={() => setDiscount((prev) => !prev)}
                  />
                </View>
                {discount && (
                  <View style={styles.footerBox}>
                    <View style={{justifyContent: 'center'}}>
                      <Segment style={{backgroundColor: '#f2f2f2'}}>
                        <Button first active>
                          <Text
                            style={{
                              textTransform: 'capitalize',
                              color: '#4b4b4b',
                            }}>
                            Rp
                          </Text>
                        </Button>
                        <Button last>
                          <Text>%</Text>
                        </Button>
                      </Segment>
                    </View>
                    <View
                      style={{width: 180, height: 40, flexDirection: 'row'}}>
                      <Input
                        style={[styles.input]}
                        selectionColor="#393e46"
                        keyboardType="decimal-pad"
                      />
                    </View>
                  </View>
                )}
                <View style={styles.footerBox}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={[styles.textBold, styles.textDetail]}>
                      Tax :
                    </Text>
                  </View>
                  <Switch
                    trackColor={{true: '#66c2ff', false: 'grey'}}
                    thumbColor={discount && '#66c2ff'}
                    value={tax}
                    onValueChange={() => setTax((prev) => !prev)}
                  />
                </View>
                {tax && (
                  <View style={styles.footerBox}>
                    <View style={{justifyContent: 'center'}} />
                    <View
                      style={{width: 200, height: 40, flexDirection: 'row'}}>
                      <Input
                        disabled
                        defaultValue="10%"
                        style={[styles.input, {color: 'grey'}]}
                        selectionColor="#393e46"
                        keyboardType="decimal-pad"
                      />
                    </View>
                  </View>
                )}
                <View
                  style={[
                    styles.footerBox,
                    {paddingTop: 20, borderTopWidth: 1, borderColor: 'grey'},
                  ]}>
                  <Text style={[styles.textBold, styles.textDetail]}>
                    Subotal :
                  </Text>
                  <Text style={styles.textDetail}>Rp. 1.000.000</Text>
                </View>
                <View style={styles.footerBox}>
                  <Text style={[styles.textBold, styles.textDetail]}>
                    Diskon :
                  </Text>
                  <Text style={styles.textDetail}>Rp. 1.000</Text>
                </View>
                <View style={styles.footerBox}>
                  <Text style={[styles.textBold, styles.textDetail]}>
                    Tax :
                  </Text>
                  <Text style={styles.textDetail}>Rp. 1.000.000</Text>
                </View>
              </>
            )}
            <View style={styles.footerBox}>
              <Text style={[styles.textBold, styles.textDetail]}>Total :</Text>
              <Text style={styles.textDetail}>Rp. 1.000.000</Text>
            </View>
          </GestureRecognizer>
        </FooterTab>
      </Footer>
      <Footer>
        <FooterTab style={styles.footerTab}>
          <Button onPress={() => handlePress()}>
            <Text style={styles.footerText}>
              {isCash ? 'selesai' : 'lanjutkan'}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
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
    // padding: 10,
    flex: 1,
    backgroundColor: '#f8f8f8',
    // height: '100%',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#4b4b4b',
  },
  textBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#4b4b4b',
  },
  footerText: {
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
    fontSize: 13,
    color: 'white',
  },
  footerTab: {
    backgroundColor: '#66c2ff',
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#66c2ff',
    borderRadius: 4,
    padding: 1,
  },
  input: {
    // backgroundColor: '#e8e8e8',
    borderRadius: 6,
    marginLeft: 10,
    fontSize: 14,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1.5,
    borderColor: '#d8d8d8',
    fontFamily: 'Poppins-SemiBold',
    color: 'grey',
    width: 0,
  },
  note: {
    fontSize: 12,
    marginTop: 6,
  },
  qty: {
    fontSize: 13,
    marginLeft: 4,
    marginRight: 4,
  },
  staticDetail: {
    elevation: 0,
    backgroundColor: '#f4f4f4',
    shadowOpacity: 0,
    borderTopWidth: 0,
    // padding: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  footerBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  textDetail: {
    fontSize: 14,
  },
  itemmini: {
    paddingBottom: 100,
  },
  expandButton: {
    
  }
});

export default App;
