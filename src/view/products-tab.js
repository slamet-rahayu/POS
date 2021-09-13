import React, {useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {
  Button,
  Text,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Container,
  Fab,
  Icon,
  Footer,
  FooterTab,
  Content,
  View,
  CheckBox,
} from 'native-base';
import formatRupiah from '../lib/format-rupiah';
import HeaderSearch from '../components/header-search-bar';

function App() {
  const navigation = useNavigation();
  const route = useRoute();
  const {params} = route;

  const [cart, setCart] = useState(0);
  const [modal, setModal] = useState(false);

  const products = [
    {
      name: 'Soto Ayam',
      category: 'Soto',
      price: 100000,
      stock: 10,
      thumbnail: require('../assets/images/resep-soto-ayam-146.jpg'),
    },
    {
      name: 'Bakso Malang',
      category: 'Bakso',
      price: 100000,
      stock: 10,
      thumbnail: require('../assets/images/resep-soto-ayam-146.jpg'),
    },
  ];

  const handlePress = (param) => {
    if (params?.transaction) {
      setCart((prevChart) => prevChart + param);
    } else {
      navigation.navigate(param);
    }
  };

  function RenderList({item}) {
    return (
      <ListItem
        thumbnail
        key={item.name}
        onPress={() =>
          handlePress(params?.transaction ? item.price : 'ProductDetail')
        }>
        <Left>
          <Thumbnail square source={item.thumbnail} />
        </Left>
        <Body>
          <Text style={styles.text}>{item.name}</Text>
          <Text note numberOfLines={1} style={styles.text}>
            {item.category}
          </Text>
        </Body>
        <Right>
          <Text style={styles.price}>Rp: {item.price}</Text>
          <Text note numberOfLines={1} style={styles.text}>
            stock: {item.stock}
          </Text>
        </Right>
      </ListItem>
    );
  }

  const FilterButton = () => {
    return (
      <TouchableOpacity onPress={() => setModal(true)}>
        <Icon style={styles.iconFilter} name="ios-filter" />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      {params?.transaction && (
        <>
          <HeaderSearch
            onBackPress={() => navigation.goBack()}
            right={<FilterButton />}
          />
          <StatusBar barStyle="light-content" backgroundColor="#66c2ff" />
        </>
      )}
      <Content>
        <List>
          <FlatList
            data={products}
            renderItem={RenderList}
            keyExtractor={(item) => item.name}
          />
        </List>
      </Content>
      {params?.transaction && (
        <Footer>
          <FooterTab style={styles.footerTab}>
            <Button
              style={{flexDirection: 'row'}}
              disabled={cart < 1}
              onPress={() => navigation.navigate('Checkout')}>
              <Text style={[styles.buttonText]}>Rp. {formatRupiah(cart)}</Text>
            </Button>
          </FooterTab>
        </Footer>
      )}
      {!params?.transaction && (
        <>
          <Modal isVisible={modal} animationInTiming={1} animationOutTiming={1}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.textModalHeader}>Filter</Text>
              </View>
              <List>
                <ListItem itemDivider>
                  <Text>Kategori</Text>
                </ListItem>
              </List>
              <View style={styles.listitem}>
                <CheckBox style={{marginRight: 15}} />
                <Text>Bakso</Text>
              </View>
              <View style={styles.listitem}>
                <CheckBox style={{marginRight: 15}} />
                <Text>Soto</Text>
              </View>
              <View style={styles.listitem}>
                <CheckBox style={{marginRight: 15}} />
                <Text>Bakmie</Text>
              </View>
              <View style={styles.modalFooter}>
                <Button transparent onPress={() => setModal(false)}>
                  <Text style={{color: '#66c2ff'}}>Terapkan</Text>
                </Button>
                <Button transparent onPress={() => setModal(false)}>
                  <Text style={{color: '#333333'}}>Batal</Text>
                </Button>
              </View>
            </View>
          </Modal>
          <Fab
            position="bottomRight"
            style={{backgroundColor: '#66c2ff'}}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Icon name="add" />
          </Fab>
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: 'white',
    textTransform: 'capitalize',
  },
  iconButton: {
    color: 'white',
  },
  container: {
    marginTop: 40,
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  footerTab: {
    backgroundColor: '#66c2ff',
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    marginTop: -8,
    right: -5,
    height: 21,
  },
  badgeText: {
    fontSize: 8,
  },
  header: {
    backgroundColor: '#66c2ff',
    alignItems: 'center',
    height: 80,
    elevation: 0,
  },
  iconBack: {
    marginRight: 10,
  },
  iconFilter: {
    marginLeft: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  textModalHeader: {
    fontWeight: 'bold',
  },
  modalCard: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
  modalHeader: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
  },
  listitem: {
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingVertical: 15,
  },
});

export default App;
