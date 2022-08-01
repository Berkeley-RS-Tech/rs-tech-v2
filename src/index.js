import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// /**
//  * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
//  * https://reactnavigation.org/docs/getting-started
//  *
//  */
//  import * as React from 'react';

//  import AsyncStorage from '@react-native-async-storage/async-storage';
//  import { NavigationContainer, useNavigation } from '@react-navigation/native';
//  import { createNativeStackNavigator } from '@react-navigation/native-stack';
//  import * as Linking from 'expo-linking';
//  import { Alert } from 'react-native';
 
//  import AuthLoadingScreen from '../screens/AuthLoadingScreen';
//  import ListScreen from '../screens/ListScreen';
//  import LoginScreen from '../screens/LoginScreen';
//  import MapScreen from '../screens/MapScreen';
//  import ModalScreen from '../screens/ModalScreen';
//  import NotFoundScreen from '../screens/NotFoundScreen';
//  import TreeDetailsScreen from '../screens/TreeDetailsScreen';
//  import VerificationScreen from '../screens/VerificationScreen';
//  import LinkingConfiguration from './LinkingConfiguration';
//  import TabNavigator from './TabNavigator';
 
//  /**
//   * A root stack navigator is often used for displaying modals on top of all other content.
//   * https://reactnavigation.org/docs/modal
//   */
//  function RootNavigator() {
//    const Stack = createNativeStackNavigator();
//    const { Navigator, Screen, Group } = Stack;
//    const navigation = useNavigation();
 
//    const handleDeepLinkingUrl = async event => {
//      const { queryParams } = Linking.parse(event.url);
//      const userToken = await AsyncStorage.getItem('userToken');
//      if (userToken) {
//        navigation.navigate('TreeDetails', { uuid: queryParams.uuid });
//      } else {
//        // TODO: remove this auth check once 'Guest Mode's is supported
//        Alert.alert(
//          'Authentication Requrired',
//          'Log in/create an account to see this page.',
//        );
//      }
//    };
//    Linking.addEventListener('url', handleDeepLinkingUrl);
 
//    return (
//      <Navigator initialRouteName="AuthLoading">
//        <Screen
//          name="AuthLoading"
//          component={AuthLoadingScreen}
//          options={{
//            headerShown: false,
//            gestureEnabled: false,
//          }}
//        />
//        <Screen
//          name="Map"
//          component={MapScreen}
//          options={{
//            title: 'Map View',
//          }}
//        />
//        <Screen
//          name="List"
//          component={ListScreen}
//          options={{
//            title: 'List View',
//          }}
//        />
//        <Screen
//          name="Login"
//          options={{ headerShown: false, gestureEnabled: false }}
//          component={LoginScreen}
//        />
//        <Screen name="Verify" component={VerificationScreen} />
//        <Screen
//          name="Root"
//          component={TabNavigator}
//          options={{ headerShown: false, gestureEnabled: false }}
//        />
//        <Screen
//          name="TreeDetails"
//          component={TreeDetailsScreen}
//          options={{
//            title: 'View Tree',
//          }}
//        />
//        <Screen
//          name="NotFound"
//          component={NotFoundScreen}
//          options={{ title: 'Oops!' }}
//        />
//        <Group screenOptions={{ presentation: 'modal' }}>
//          <Screen name="Modal" component={ModalScreen} />
//        </Group>
//      </Navigator>
//    );
//  }
 
//  export default function Navigation() {
//    return (
//      <NavigationContainer linking={LinkingConfiguration}>
//        <RootNavigator />
//      </NavigationContainer>
//    );
//  }*