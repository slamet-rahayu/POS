import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  View,
  Grid,
  Row,
  Col,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Footer,
  FooterTab,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;

function App() {
  const navigation = useNavigation();
  const handleNav = (route, param) => {
    navigation.navigate(route, param);
  };

  const menu = [
    {
      name: 'Top Up',
      routeName: 'Payment',
      param: {
        isTopUp: true,
      },
      icon: {
        name: 'add-circle',
        type: 'Ionicons',
      },
    },
    {
      name: 'Transaksi',
      routeName: 'ProductsTab',
      param: {
        transaction: true,
      },
      icon: {
        name: 'swap-horizontal',
        type: 'Ionicons',
      },
    },
    {
      name: 'Produk',
      routeName: 'Products',
      icon: {
        name: 'basket-outline',
        type: 'Ionicons',
      },
    },
    {
      name: 'Report',
      routeName: 'Report',
      icon: {
        name: 'bar-chart-outline',
        type: 'Ionicons',
      },
    },
    {
      name: 'Members',
      routeName: 'Users',
      icon: {
        name: 'people-outline',
        type: 'Ionicons',
      },
    },
    {
      name: 'Setting',
      routeName: 'Settings',
      icon: {
        name: 'cog',
        type: 'Ionicons',
      },
    },
  ];

  const recentTransaction = [
    {
      date: '20 Feb 2021',
      No: 'Penjualan',
    },
    {
      date: '24 Feb 2021',
      No: 'Top Up',
    },
    {
      date: '25 Feb 2021',
      No: 'Penjualan',
    },
  ];

  function RenderBottomCard({item}) {
    return (
      <TouchableOpacity
        style={[styles.bottomCard, styles.boxShadow]}
        onPress={() => navigation.navigate('TransactionDetail')}>
        <View>
          <Icon
            style={styles.iconBottomCard}
            type="Ionicons"
            name="newspaper-outline"
          />
        </View>
        <View>
          <Text style={styles.cardText}>{item.date}</Text>
          <Text style={styles.cardText}>{item.No}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#66c2ff" />
      <Content>
        <View style={styles.userWrapper}>
          <List style={styles.userContainer}>
            <ListItem avatar>
              <Left style={{borderBottomWidth: 0}}>
                <Icon style={styles.iconUser} type="FontAwesome5" name="user" />
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.userText}>Slamet</Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Icon
                  style={styles.userText}
                  type="FontAwesome5"
                  name="chevron-right"
                />
              </Right>
            </ListItem>
          </List>
        </View>
        <View>
          <List>
            <ListItem avatar style={styles.incomeContainer}>
              <Left style={{borderBottomWidth: 0}}>
                <View>
                  <Text style={styles.textWidget}>Penjualan :</Text>
                  <Text note numberOfLines={1} style={{fontSize: 11}}>
                    Feb, 2021
                  </Text>
                </View>
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.textWidget}>Rp. 10.000.000</Text>
              </Body>
            </ListItem>
          </List>
        </View>
        <View style={styles.menuWrapper}>
          <View style={styles.menuContainer}>
            {menu.map((v, k) => (
              <TouchableOpacity
                key={v.name + k}
                onPress={() => handleNav(v.routeName, v.param)}>
                <View>
                  <View style={[styles.menu, styles.boxShadow]}>
                    <Icon {...v.icon} style={styles.menuIcon} />
                    <Text style={styles.menuText}>{v.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => navigation.navigate('TransactionHistory')}
              style={styles.cardContainer}>
              <Text style={styles.textWidget}>Transaksi terakhir</Text>
              <Icon
                style={[styles.textWidget, {fontSize: 15}]}
                type="FontAwesome5"
                name="chevron-right"
              />
            </TouchableOpacity>
            <View>
              <FlatList
                horizontal
                data={recentTransaction}
                renderItem={RenderBottomCard}
                keyExtractor={(item) => item.date}
              />
            </View>
          </View>
        </View>
      </Content>
      <Footer style={styles.footer}>
        <Button
          full
          style={styles.footerButton}
          large
          onPress={() => navigation.navigate('Payment', {isTopUp: false})}>
          <Text style={styles.footerButtonText}>Pembayaran</Text>
        </Button>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: '#ededed',
    flex: 1,
  },
  textWidget: {
    color: '#4b4b4b',
    fontFamily: 'Poppins-SemiBold',
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topGrid: {
    // height: 180,
  },
  bottomGrid: {
    backgroundColor: '#f4f9f9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  miniMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: screenWidth,
    marginTop: 40,
  },
  miniMenu: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  menuContainer: {
    padding: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 2,
  },
  menu: {
    width: wp('26.8%'),
    height: hp('13%'),
    // width: (screenWidth * 26.8) / 100,
    // height: (screenWidth * 26.8) / 100,
    borderRadius: 8,
    padding: 15,
    margin: 10,
    backgroundColor: '#f2f2f2',
    // borderColor: '#80ccff',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: wp('10%'),
    marginBottom: 10,
    color: '#66c2ff',
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#4b4b4b',
  },
  userContainer: {
    // marginTop: 10,
    borderWidth: 0,
    // marginBottom: 10,
  },
  incomeContainer: {
    marginTop: 40,
    marginBottom: 10,
  },
  bottomCard: {
    borderRadius: 8,
    width: screenWidth - 64,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  cardContainer: {
    margin: 10,
    marginTop: 20,
    width: screenWidth - 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: 20,
    width: screenWidth,
    borderWidth: 1,
    borderColor: 'grey',
  },
  userText: {
    // fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  cardText: {
    color: '#4b4b4b',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  iconBottomCard: {
    marginRight: 10,
    color: '#66c2ff',
    fontSize: 40,
  },
  iconUser: {
    paddingBottom: 10,
    paddingTop: 10,
    color: 'white',
  },
  userWrapper: {
    width: screenWidth,
    paddingTop: 40,
    paddingBottom: 10,
    elevation: 2,
    backgroundColor: '#66c2ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  footer: {
    paddingRight: 20,
    paddingLeft: 20,
    borderTopWidth: 0.5,
    borderColor: '#ededed',
    backgroundColor: '#f2f2f2',
    height: 100,
    flexDirection: 'column',
  },
  footerButton: {
    borderRadius: 6,
    backgroundColor: '#66c2ff',
  },
  footerButtonText: {
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default App;
