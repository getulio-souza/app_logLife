// import React, { component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './telas/login'
import Menu from './telas/menu'
import Subscribe from './telas/subscribe'
import Selecao from './telas/selecao'
import Consulta from './telas/consultar_coleta'
import Dados from './telas/dados'; 

export default function App() {
  
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode = "none" initialRouteName='Login'>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="subscribe" component={Subscribe} />
          <Stack.Screen name="menu" component={Menu} />
          <Stack.Screen name="selecao" component={Selecao} />
          <Stack.Screen name="consulta" component={Consulta} />
          <Stack.Screen name="dados" component={Dados} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

