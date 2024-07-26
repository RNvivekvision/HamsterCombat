import { Images } from '../Constants';
import { NavRoutes } from '../Navigation';

const DummyData = {
  Drawer: [
    {
      title: 'Home',
      nav: NavRoutes.Drawer,
    },
    {
      title: 'Mine',
      nav: NavRoutes.Mine,
    },
    {
      title: 'Friends',
      nav: NavRoutes.Friends,
    },
    {
      title: 'Earn',
      nav: NavRoutes.Earn,
    },
    {
      title: 'More',
      nav: NavRoutes.More,
    },
  ],
  Purchases: [
    {
      coin: Images.dollar,
      title: '$10',
      points: 50,
    },
    {
      coin: Images.dollarCoins,
      title: '$20',
      points: 100,
    },
    {
      coin: Images.dollarCoins,
      title: '$30',
      points: 150,
    },
    {
      coin: Images.dollar,
      title: '$40',
      points: 200,
    },
    {
      coin: Images.dollar,
      title: '$50',
      points: 250,
    },
    {
      coin: Images.dollarCoins,
      title: '$60',
      points: 300,
    },
    {
      coin: Images.dollarCoins,
      title: '$70',
      points: 350,
    },
    {
      coin: Images.dollar,
      title: '$80',
      points: 400,
    },
    {
      coin: Images.dollar,
      title: '$90',
      points: 450,
    },
    {
      coin: Images.dollarCoins,
      title: '$100',
      points: 500,
    },
  ],
};

export default DummyData;
