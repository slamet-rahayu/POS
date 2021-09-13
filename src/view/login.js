import React from 'react';
import {Container, Content, View, Icon, Text, Button} from 'native-base';
import {StyleSheet, Dimensions, StatusBar, TextInput} from 'react-native';
import {StackActions} from '@react-navigation/native';
const width = Dimensions.get('window').width;

function App({navigation}) {
  const login = () => navigation.dispatch(StackActions.replace('Home'));
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#66c2ff" />
      <Content>
        <View style={styles.topBox} />
        <View style={styles.bottomBox}>
          <View style={styles.formContainer}>
            <View style={styles.signInTextWrapper}>
              <Text style={styles.signInText}>Sign in</Text>
            </View>
            <View style={styles.form}>
              <Text style={[styles.label, styles.text]}>Merchant ID</Text>
              <View>
                <Icon name="business-outline" style={styles.icon} />
                <TextInput placeholder="hello" style={styles.input} />
              </View>
            </View>
            <View style={styles.form}>
              <Text style={[styles.label, styles.text]}>Username</Text>
              <View>
                <Icon name="person-outline" style={styles.icon} />
                <TextInput placeholder="hello" style={styles.input} />
              </View>
            </View>
            <View style={styles.form}>
              <Text style={[styles.label, styles.text]}>Username</Text>
              <View>
                <Icon name="key-outline" style={styles.icon} />
                <TextInput placeholder="hello" style={styles.input} />
              </View>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <Button full style={styles.button} onPress={() => login()}>
              <Text style={styles.textButton}>Login</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  topBox: {
    height: 180,
    width,
    backgroundColor: '#66c2ff',
  },
  bottomBox: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    width,
    padding: 30,
    // height: 510,
  },
  img: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
  label: {
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
  icon: {
    fontSize: 17,
    color: '#838383',
    position: 'absolute',
    bottom: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    padding: 0,
    paddingBottom: 5,
    paddingLeft: 25,
    color: '#333333',
    borderColor: '#838383',
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    // fontWeight: 'normal',
  },
  form: {
    marginBottom: 25,
  },
  formContainer: {
    marginTop: 20,
  },
  signInText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  signInTextWrapper: {
    marginBottom: 40,
  },
  buttonWrapper: {
    marginTop: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#66c2ff',
  },
  textButton: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default App;
