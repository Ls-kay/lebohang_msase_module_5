import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Register from './Screens/Register';
import RecordScreen from './Screens/RecordScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>

      </View>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#f15946',
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login'
          }}
        />
        <Stack.Screen
          name="RecordScreen"
          component={RecordScreen}
          options={{
            title: 'RecordScreen'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
