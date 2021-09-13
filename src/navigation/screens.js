import {CardStyleInterpolators} from '@react-navigation/stack';

import Home from '../view/home';
import Products from '../view/products';
import ProductsTab from '../view/products-tab';
import Settings from '../view/settings';
import ProductDetail from '../view/product-detail';
import Users from '../view/users';
import UserDetail from '../view/user-detail';
import Report from '../view/report';
import ReportStock from '../view/report-stock-product';
import TransactionHistory from '../view/transaction-history';
import TransactionDetail from '../view/transaction-detail';
import ReportIncome from '../view/report-income';
import Payment from '../view/payment';
import Checkout from '../view/checkout';
import TransactionSuccess from '../view/transaction-success';
import Login from '../view/login';
import Splash from '../view/splash';
import Struk from '../view/struk';
import Printer from '../view/printer';
import Escpos from '../view/escpos';

const headerStyle = {
  headerTitleStyle: {
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#66c2ff',
    elevation: 0,
  },
};

const screens = [
  {
    key: 'home',
    name: 'Home',
    component: Home,
    options: {
      ...headerStyle,
      headerTitle: 'Home',
    },
  },
  {
    key: 'products',
    name: 'Products',
    component: Products,
    options: {
      ...headerStyle,
      headerShown: false,
    },
  },
  {
    key: 'settings',
    name: 'Settings',
    component: Settings,
    options: {
      ...headerStyle,
      headerTitle: 'Setting',
    },
  },
  {
    key: 'product-detail',
    name: 'ProductDetail',
    component: ProductDetail,
    options: {
      ...headerStyle,
      headerTitle: 'Produk',
    },
  },
  {
    key: 'users',
    name: 'Users',
    component: Users,
    options: {
      ...headerStyle,
      headerTitle: 'Users',
    },
  },
  {
    key: 'userdetail',
    name: 'UserDetail',
    component: UserDetail,
    options: {
      ...headerStyle,
      headerTitle: '',
    },
  },
  {
    key: 'report',
    name: 'Report',
    component: Report,
    options: {
      ...headerStyle,
      headerTitle: 'Report',
    },
  },
  {
    key: 'reportstock',
    name: 'ReportStock',
    component: ReportStock,
    options: {
      headerShown: null,
    },
  },
  {
    key: 'historytransaksi',
    name: 'TransactionHistory',
    component: TransactionHistory,
    options: {
      ...headerStyle,
      headerTitle: 'Riwayat Transaksi',
    },
  },
  {
    key: 'detailtransaksi',
    name: 'TransactionDetail',
    component: TransactionDetail,
    options: {
      ...headerStyle,
      headerTitle: 'Detail Transaksi',
    },
  },
  {
    key: 'reportincome',
    name: 'ReportIncome',
    component: ReportIncome,
    options: {
      ...headerStyle,
      headerTitle: 'Ringkasan',
    },
  },
  {
    key: 'payment',
    name: 'Payment',
    component: Payment,
    options: {
      ...headerStyle,
      headerTitle: '',
    },
  },
  {
    key: 'products-tab',
    name: 'ProductsTab',
    component: ProductsTab,
    options: {
      headerShown: false,
    },
  },
  {
    key: 'checkout',
    name: 'Checkout',
    component: Checkout,
    options: {
      ...headerStyle,
      headerTitle: 'Checkout',
    },
  },
  {
    key: 'transactionsuccess',
    name: 'TransactionSuccess',
    component: TransactionSuccess,
    options: {
      headerShown: false,
    },
  },
  {
    key: 'login',
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  },
  {
    key: 'splash',
    name: 'Splash',
    component: Splash,
    options: {
      headerShown: false,
    },
  },
  {
    key: 'struk',
    name: 'Struk',
    component: Struk,
    options: {
      ...headerStyle,
    },
  },
  {
    key: 'printer',
    name: 'Printer',
    component: Printer,
    options: {
      ...headerStyle,
    },
  },
  {
    key: 'escpos',
    name: 'Escpos',
    component: Escpos,
    options: {
      ...headerStyle,
    },
  },
];

export default screens;
