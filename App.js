import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CadastroTela from './screens/Cadastro';
import Principal from './screens/Principal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={CadastroTela} />
            <Stack.Screen name="Principal" component={Principal} />
          </Stack.Navigator>
    </NavigationContainer>
  );  
}



