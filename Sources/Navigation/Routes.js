import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Agreement } from '../Screens';
import Drawer from './Drawer';

const Stack = createStackNavigator();

const Routes = () => {
  const Screens = useCallback(() => {
    return (
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        {/* <Stack.Screen name={NavRoutes.Agreement} component={Agreement} /> */}
        <Stack.Screen name={NavRoutes.Home} component={Drawer} />
      </Stack.Navigator>
    );
  }, []);

  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default Routes;
