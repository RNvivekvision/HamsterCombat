import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { togglePurchases } from '../Redux/Actions';
import { Purchases } from '../Components';

const Stack = createStackNavigator();

const Routes = () => {
  const { showPurchases } = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();

  const Screens = useCallback(() => {
    return (
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        <Stack.Screen name={NavRoutes.Home} component={Drawer} />
      </Stack.Navigator>
    );
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
      <Purchases
        visible={showPurchases}
        onClose={() => dispatch(togglePurchases())}
      />
    </SafeAreaProvider>
  );
};

export default Routes;
