import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Machines from './screens/Machines';
import Machine from './screens/Machine';
import ClientMachines from './screens/ClientMachines';
import ServiceAdd from './screens/ServiceAdd';
import ReqServieceAdd from './screens/ReqServiceAdd';
import { Login } from './screens';
import {Client} from './screens';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator()
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Machines"
            component={Machines}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Machine"
            component={Machine}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="ClientMachines"
            component={ClientMachines}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="ServiceAdd"
            component={ServiceAdd}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Client"
            component={Client}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="ReqServieceAdd"
            component={ReqServieceAdd}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
    
  );
}

