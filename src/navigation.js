import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons,SimpleLineIcons } from '@expo/vector-icons'

import HomeScreen from './screens/home';
import WalletScreen from './screens/wallet';
import PayScreen from './screens/pay';
import LoginScreen from './screens/login';
import PayButtom from './components/payButton';

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
   Login: {
        lib: SimpleLineIcons,
        name: 'login',
    },
    
};
export default function navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButtom
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
                    borderTopColor: 'rgba(255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    title: 'inicio',
                }}
            />
            <Tab.Screen name="Wallet" component={WalletScreen}
                options={{
                    title: 'carteira',
                }}
            />
            <Tab.Screen name="Pay" component={PayScreen}
                options={{
                    title: ''
                }} />
            <Tab.Screen name="Notifications" component={PayScreen}
                options={{
                    title: 'notificações'
                }} />
           

            <Tab.Screen name="Login" component={LoginScreen}
                options={{
                    title: 'login'
                }} />

        </Tab.Navigator>


    );
}