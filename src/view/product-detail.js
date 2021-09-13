import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  Container,
  Content,
  Button,
  Footer,
  FooterTab,
  Form,
  Item,
  Label,
  Input,
  Picker,
  Icon,
} from 'native-base';
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

function App() {
  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="cover"
            source={require('../assets/images/resep-soto-ayam-146.jpg')}
            style={styles.img}
          />
          <TouchableOpacity style={styles.buttonImg} large>
            <Icon name="camera" style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
        <Form style={styles.form}>
          <Item stackedLabel style={styles.item}>
            <Label style={[styles.text, styles.label]}>Branch ID</Label>
            <Input style={[styles.text, styles.input]} defaultValue="A123" />
          </Item>
          <Item stackedLabel last style={styles.item}>
            <Label style={[styles.text, styles.label]}>SKU</Label>
            <Input style={[styles.text, styles.input]} defaultValue="Soto" />
          </Item>
          <Item stackedLabel last style={styles.item}>
            <Label style={[styles.text, styles.label]}>Name</Label>
            <Input
              style={[styles.text, styles.input]}
              defaultValue="Soto Ayam"
            />
          </Item>
          <Item stackedLabel last style={styles.item}>
            <Label style={[styles.text, styles.label]}>Category</Label>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue="key1">
                <Picker.Item label="Bakso" value="key0" />
                <Picker.Item label="Soto" value="key1" />
              </Picker>
            </Item>
          </Item>
          <Item stackedLabel last style={styles.item}>
            <Label style={[styles.text, styles.label]}>Pice</Label>
            <Input
              style={[styles.text, styles.input]}
              defaultValue="RP. 10,000"
            />
          </Item>
          <Item stackedLabel last style={styles.item}>
            <Label style={[styles.text, styles.label]}>Stock</Label>
            <Input style={[styles.text, styles.input]} defaultValue="10" />
          </Item>
        </Form>
      </Content>
      <Footer>
        <FooterTab style={styles.footerTab}>
          <Button onPress={() => alert('yeay')}>
            <Text style={styles.footerText}>Simpan</Text>
          </Button>
          <Button onPress={() => alert('yeay')}>
            <Text style={styles.footerText}>Hapus</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  img: {
    width: imageWidth,
    height: 200,
  },
  imgContainer: {
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    // marginBottom: 15,
    // paddingBottom: -15,
    borderBottomWidth: 0,
  },
  form: {
    paddingRight: 15,
    marginBottom: 20,
  },
  input: {
    marginBottom: -10,
    fontSize: 15,
    paddingLeft: 10,
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
    fontSize: 14,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
  },
  buttonImg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 1000,
    marginBottom: -20,
    marginRight: 5,
    backgroundColor: '#66c2ff',
    padding: 10,
  },
});

export default App;
