// import React, { component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './telas/home'
import Login from './telas/login'
import Menu from './telas/menu'
import Subscribe from './telas/subscribe'
import Selecao from './telas/selecao'
import Consulta from './telas/consultar_coleta'
import Dados from './telas/dados'; 
import DadosEnviarImagem from './telas/dados_enviar_img'; 
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Stack = createStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Dados'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Subscribe" component={Subscribe} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Selecao" component={Selecao} />
          <Stack.Screen name="Consulta" component={Consulta} />
          <Stack.Screen name="Dados" component={Dados} options={{headerShown:false}}/>
          <Stack.Screen name="DadosEnviarImagem" component={DadosEnviarImagem} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

