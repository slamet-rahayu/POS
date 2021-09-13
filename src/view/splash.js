import React, {useEffect} from 'react';
import {StatusBar, Image, StyleSheet} from 'react-native';
import {View, Text, Container, Content} from 'native-base';
import {StackActions} from '@react-navigation/native';

function App({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 1000);
  });
  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <Image
          source={require('../assets/images/pos-logo.png')}
          style={styles.img}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default App;
