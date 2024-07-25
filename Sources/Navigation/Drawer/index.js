import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import { Earn, Friends, Home, Mine, More } from '../../Screens';

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Screen name={NavRoutes.Drawer} component={Home} />
      <Screen name={NavRoutes.Mine} component={Mine} />
      <Screen name={NavRoutes.Friends} component={Friends} />
      <Screen name={NavRoutes.Earn} component={Earn} />
      <Screen name={NavRoutes.More} component={More} />
    </Navigator>
  );
};

export default Drawer;
