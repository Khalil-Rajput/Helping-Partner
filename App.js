import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServiceRequestScreen from './screens/ServiceRequestScreen';
import WorkerDashboardScreen from './screens/WorkerDashboardScreen';
import UserDashboardScreen from './screens/UserDashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import BidScreen from './screens/BidScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ServiceRequest" component={ServiceRequestScreen} />
          <Stack.Screen name="WorkerDashboard" component={WorkerDashboardScreen} />
          <Stack.Screen name="UserDashboard" component={UserDashboardScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Bid" component={BidScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
