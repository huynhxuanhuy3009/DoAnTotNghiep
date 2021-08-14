//import library
import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import components user 
import SignUp from './scenes/SignUp/signup';
import SignIn from './scenes/SignIn/signin';
import MainLayout from './scenes/MainLayout/index';
import AppMainLayout from './scenes/AppMainLayout';
import DanhMuc_SP from './scenes/DanhMuc_SP/index';
import HomeFoody from './scenes/HomeFoody/index';
import DrinkFoody from './scenes/DrinkFoody/index';
import Cart from './scenes/cart/index';
import Share_Layout from './scenes/Share_Layout/index';
import Layout_Order from './scenes/Layout_Order/index';

import test from './components/test';

//import components admin
import Layout_admin from './scenes/Layout_admin/index';
import Add_Product_admin from './scenes/Add_Product_admin/index';
import Edit_Product_admin from './scenes/Edit_Product_admin/index';
import Delete_Product_admin from './scenes/Delete_Product_admin/index';

const Stack = createStackNavigator();
export default function setup() {
  state = {
    isLoading: false,
    store: configureStore(() => this.setState({isLoading: false})),
  };

  return (
    <Provider store={this.state.store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AppMainLayout">
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="MainLayout"
                component={MainLayout}
                options={{
                headerShown: false,
                }}
            />   
            <Stack.Screen
                name="AppMainLayout"
                component={AppMainLayout}
                options={{
                headerShown: false,
                }}
            />    
            <Stack.Screen
                name="DanhMuc_SP"
                component={DanhMuc_SP}
                options={{
                headerShown: false,
                }}
            />    
            <Stack.Screen
                name="HomeFoody"
                component={HomeFoody}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="DrinkFoody"
                component={DrinkFoody}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="Share_Layout"
                component={Share_Layout}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="Layout_Order"
                component={Layout_Order}
                options={{
                headerShown: false,
                }}
            />


            <Stack.Screen
                name="test"
                component={test}
                options={{
                headerShown: false,
                }}
            />

          {/* Screen Admin */}
            <Stack.Screen
                name="Layout_admin"
                component={Layout_admin}
                options={{
                headerShown: false,
                }}
            />
           <Stack.Screen
                name="Add_Product_admin"
                component={Add_Product_admin}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="Edit_Product_admin"
                component={Edit_Product_admin}
                options={{
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="Delete_Product_admin"
                component={Delete_Product_admin}
                options={{
                headerShown: false,
                }}
             />        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
