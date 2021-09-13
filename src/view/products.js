import React, {useState} from 'react';
import {
  Tab,
  Tabs,
  Container,
  Header,
  Item,
  Input,
  Icon,
  Text,
  View,
  CheckBox,
  List,
  ListItem,
  Button,
} from 'native-base';
import {StatusBar, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Products from './products-tab';
import Category from './category-tabs';
import HeaderSearch from '../components/header-search-bar';

function App({navigation}) {
  const [modal, setModal] = useState(false);
  const tabItem = [
    {
      name: 'Produk',
      child: <Products />,
    },
    {
      name: 'Kategori',
      child: <Category />,
    },
  ];

  const FilterButton = () => {
    return (
      <TouchableOpacity onPress={() => setModal(true)}>
        <Icon style={styles.iconFilter} name="ios-filter" />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <HeaderSearch
        onBackPress={() => navigation.goBack()}
        right={<FilterButton />}
      />
      <StatusBar barStyle="light-content" backgroundColor="#66c2ff" />
      <Tabs style={{elevation: 0}}>
        {tabItem.map((v) => (
          <Tab
            textStyle={styles.textTab}
            key={v.name}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
            activeTextStyle={styles.textTab}
            heading={v.name}>
            {v.child}
          </Tab>
        ))}
      </Tabs>
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
    </Container>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#66c2ff',
  },
  textTab: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
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
  modalFooter: {
    marginVertical: 5,
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
});

export default App;
