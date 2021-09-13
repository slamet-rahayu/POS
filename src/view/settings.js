import React, {useEffect, useState} from 'react';
import {
  Body,
  Container,
  Content,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Left,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import BleManager from 'react-native-ble-manager';
import {View, StyleSheet, DeviceEventEmitter, ToastAndroid} from 'react-native';
import {BluetoothManager} from 'react-native-bluetooth-escpos-printer';

function App({navigation}) {
  const [blEnabled, setBlEnabled] = useState(false);
  const [foundDs, setFoundDs] = useState([]);
  const [connected, setConnected] = useState('');
  const [pairedDs, setPairedDs] = useState([]);

  let listener = [];

  useEffect(() => {
    BleManager.start({showAlert: false});
    const checkBluetooth = async () => {
      try {
        const isBlEnabled = await BluetoothManager.isBluetoothEnabled();
        setBlEnabled(isBlEnabled);
      } catch (error) {
        console.log(error);
      }
    };

    const getConnected = () => {
      BleManager.getConnectedPeripherals([]).then((arr) => {
        console.log('connected ' + arr);
      });
    };

    listener.push(
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT,
        () => {
          ToastAndroid.show(
            'Perangkat tidak mendukung bluetooth',
            ToastAndroid.LONG,
          );
        },
      ),
    );

    listener.push(
      DeviceEventEmitter.addListener(
        BluetoothManager.EVENT_CONNECTION_LOST,
        () => {
          setConnected('');
        },
      ),
    );

    checkBluetooth();
    getConnected();
  }, [listener]);

  const turnBl = async () => {
    try {
      await BluetoothManager.enableBluetooth();
      navigation.navigate('Printer');
    } catch (error) {
      console.log(error);
    }
  };

  const setting = [
    {
      category: 'Umum',
      menu: [
        {
          name: 'Branch ID',
          value: '123',
          icon: 'bookmark-outline',
          handlePress: () => alert('yes'),
        },
        {
          name: 'Branch Name',
          value: 'Branch',
          icon: 'business-outline',
          handlePress: () => alert('yes'),
        },
        {
          name: 'Address',
          value: 'Jl. jalan',
          icon: 'map-outline',
          handlePress: () => alert('yes'),
        },
        {
          name: 'Tax',
          value: 'Yes',
          icon: 'card-outline',
          handlePress: () => alert('yes'),
        },
        {
          name: 'Currency Symbol',
          value: '?',
          icon: 'cash-outline',
          handlePress: () => alert('yes'),
        },
      ],
    },
    {
      category: 'Perangkat',
      menu: [
        {
          name: 'Printer',
          value: 'Tidak terhubung',
          icon: 'print-outline',
          handlePress: () => {
            if (blEnabled) {
              navigation.navigate('Printer');
            } else {
              turnBl();
            }
          },
        },
      ],
    },
  ];

  return (
    <Container style={styles.container}>
      <Content>
        <List>
          {setting.map((v) => (
            <>
              <ListItem itemDivider key={v.category}>
                <Text style={styles.textTitle}>{v.category}</Text>
              </ListItem>
              {v.menu.map((k) => (
                <ListItem
                  avatar
                  key={k.name}
                  button
                  onPress={() => k.handlePress()}>
                  <Left>
                    <Icon
                      style={{color: '#575757', fontSize: 18}}
                      name={k.icon}
                    />
                  </Left>
                  <Body>
                    <Text style={styles.textTitle}>{k.name}</Text>
                  </Body>
                  <Right style={styles.right}>
                    <Text note style={{paddingBottom: 2, marginRight: 3}}>
                      {k.value}
                    </Text>
                    <Icon name="chevron-forward" type="Ionicons" />
                  </Right>
                </ListItem>
              ))}
            </>
          ))}
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 6,
    backgroundColor: '#f8f8f8',
    color: '#333333',
    marginRight: 15,
  },
  label: {
    marginBottom: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listitem: {
    marginBottom: 5,
    marginTop: 5,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#575757',
  },
});

export default App;
