import React from 'react';
import {StyleSheet, Image, ActivityIndicator} from 'react-native';
import {Card, CardItem, Text, View, Icon} from 'native-base';
import Modal from 'react-native-modal';

function App(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      animationInTiming={1}
      animationOutTiming={1}>
      <Card style={styles.modalVIew}>
        <CardItem style={styles.modalBody}>
          <View style={styles.imgWrapper}>
            {!props.error ? (
              !props.loading ? (
                <Image
                  style={styles.img}
                  source={require('../assets/images/nfc-card.png')}
                />
              ) : (
                <ActivityIndicator size="large" color="#66c2ff" />
              )
            ) : (
              <Icon
                type="FontAwesome5"
                name="times-circle"
                style={{fontSize: 40, marginBottom: 10, color: 'red'}}
              />
            )}
          </View>
          <View>
            <Text style={styles.text}>
              {props.error || 'Silahkan tempelkan kartu'}
            </Text>
          </View>
        </CardItem>
        <CardItem
          footer
          button
          style={styles.modalFooter}
          onPress={() => props.onDismiss()}>
          <Text style={[styles.modalFooterText, styles.text, {color: 'red'}]}>
            {props.error ? 'Tutup' : 'Batalkan'}
          </Text>
        </CardItem>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});

export default App;
