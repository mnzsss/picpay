import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from '../components/PayButton';

import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Pay from '../pages/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen options={{ title: 'Inicio' }} name="Home" component={Home} />
      <Tab.Screen
        options={{ title: 'Carteira' }}
        name="Wallet"
        component={Wallet}
      />
      <Tab.Screen options={{ title: '' }} name="Pay" component={Pay} />

      <Tab.Screen
        options={{ title: 'Notificações' }}
        name="Notifications"
        component={Pay}
      />

      <Tab.Screen
        options={{ title: 'Ajustes' }}
        name="Settings"
        component={Pay}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
