import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import {
  Container,
  Content,
  View,
  Icon,
  Text,
  Button,
  List,
  ListItem,
} from 'native-base';
import {BluetoothManager} from 'react-native-bluetooth-escpos-printer';
const {height} = Dimensions.get('window');

function App() {
  const [loading, setLoading] = useState(false);
  const [foundBtDev, setFoundBtDev] = useState([]);
  const [pairedDs, setPairedDs] = useState([]);
  const [boundDev, setBoundDev] = useState([]);

  useEffect(() => {
    console.log(boundDev.name);
  }, [boundDev]);

  const deviceFoundEvt = (rsp) => {
    let r = null;
    try {
      if (typeof rsp.device === 'object') {
        r = rsp.device;
      } else {
        r = JSON.parse(rsp.device);
      }
    } catch (e) {
      //alert(e.message);
      //ignore
    }
    //alert('f')
    if (r) {
      let found = foundBtDev || [];
      if (found.findIndex) {
        let duplicated = found.findIndex(function (x) {
          return x.address === r.address;
        });
        //CHECK DEPLICATED HERE...
        if (duplicated === -1) {
          found.push(r);
          setFoundBtDev(found);
        }
      }
    }
  };

  const pairedDevEvt = (rsp) => {
    var ds = null;
    if (typeof rsp.devices === 'object') {
      ds = rsp.devices;
    } else {
      try {
        ds = JSON.parse(rsp.devices);
      } catch (e) {}
    }
    if (ds && ds.length) {
      let pared = pairedDs;
      pared = pared.concat(ds || []);
      setPairedDs(pared);
    }
  };

  const scanDev = () => {
    setLoading(true);
    BluetoothManager.scanDevices().then(
      (s) => {
        var ss = s;
        var found = ss.found;
        try {
          found = JSON.parse(found);
          console.log('found ' + found);
        } catch (error) {
          console.log(error);
          console.log('found error' + found);
        }
        var fds = foundBtDev;
        if (found && found.length) {
          fds = found;
        }
        setFoundBtDev(fds);
        setLoading(false);
      },
      (err) => {
        setLoading(false);
        // alert('error' + JSON.stringify(err));
      },
    );
  };

  const connectDev = (name, address) => {
    setLoading(true);
    BluetoothManager.connect(address).then(
      () => {
        setBoundDev({name, address});
        setFoundBtDev([]);
        setPairedDs([]);
        setLoading(false);
      },
      (e) => {
        setLoading(false);
        console.log(e);
      },
    );
  };

  const disconnectDev = (address) => {
    setLoading(true);
    BluetoothManager.connect(address).then(
      () => {
        setBoundDev({});
        setLoading(false);
      },
      (e) => {
        setLoading(false);
        console.log(e);
      },
    );
  };

  useEffect(() => {
    DeviceEventEmitter.addListener(
      BluetoothManager.EVENT_DEVICE_FOUND,
      (rsp) => {
        deviceFoundEvt(rsp);
      },
    );

    DeviceEventEmitter.addListener(
      BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
      (rsp) => {
        pairedDevEvt(rsp);
      },
    );
  }, []);

  return (
    <Container>
      <Content style={styles.contentContainer}>
        {pairedDs.length !== 0 || foundBtDev.length !== 0 ? (
          <View>
            <List>
              <ListItem itemDivider>
                <Text>Paired</Text>
              </ListItem>
              {pairedDs.map((v) => (
                <ListItem
                  button
                  onPress={() => connectDev(v.name || 'UNKNOWN', v.address)}
                  key={v.address}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.text}>{v.name || 'UNKNOWN'}</Text>
                  <Text style={styles.text}>{v.address}</Text>
                </ListItem>
              ))}
              <ListItem itemDivider>
                <Text>Found</Text>
              </ListItem>
              {foundBtDev.map((v) => (
                <ListItem
                  button
                  onPress={() => connectDev(v.name || 'UNKNOWN', v.address)}
                  key={v.address}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.text}>{v.name || 'UNKNOWN'}</Text>
                  <Text style={styles.text}>{v.address}</Text>
                </ListItem>
              ))}
              {loading && <ActivityIndicator size="small" color="green" />}
              <View
                style={{
                  marginTop: 20,
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Button
                  disabled={loading}
                  onPress={() => {
                    setPairedDs([]);
                    setFoundBtDev([]);
                    scanDev();
                  }}
                  style={{
                    borderRadius: 6,
                    backgroundColor: loading ? 'grey' : '#66c2ff',
                  }}>
                  <Text>Rescan</Text>
                </Button>
              </View>
            </List>
          </View>
        ) : (
          <View style={styles.content}>
            <View>
              {loading && pairedDs.length === 0 ? (
                <ActivityIndicator size="large" color="green" />
              ) : (
                <>
                  <Icon
                    name="print-outline"
                    style={[
                      styles.icon,
                      {color: boundDev.address ? '#66c2ff' : 'grey'},
                    ]}
                  />
                  <View
                    style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {boundDev.address && (
                        <Text style={[styles.text, {marginBottom: 15}]}>
                          {boundDev.name || 'UNKNOWN'}
                        </Text>
                      )}
                      <Button
                        style={styles.button}
                        onPress={() => {
                          if (boundDev.address) {
                            disconnectDev(boundDev.address);
                          } else {
                            scanDev();
                          }
                        }}>
                        <Text>
                          {boundDev.address
                            ? 'Putuskan perangkat'
                            : 'pindai perangkat'}
                        </Text>
                      </Button>
                    </View>
                  </View>
                </>
              )}
            </View>
          </View>
        )}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    // backgroundColor: '#ededed',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    height,
  },
  listitem: {
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    borderRadius: 6,
    backgroundColor: '#66c2ff',
  },
  text: {
    fontSize: 14,
  },
  icon: {
    marginRight: -15,
    fontSize: 180,
  },
});

export default App;
