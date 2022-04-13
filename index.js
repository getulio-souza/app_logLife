import { registerRootComponent } from 'expo';
import App from './App';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


 export function Login() {
      const navigation = useNavigation()
    return (
        <View>
            <Text>Login</Text>
            <Button
            title='Ir para cadastro' onPress={()=> navigation.navigate("Subscribe")}
            />
        </View>
    );    
 }

export default Login;