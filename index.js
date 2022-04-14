import { registerRootComponent } from 'expo';
import App from './App';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


// function Home() {
//       const navigation = useNavigation()
//     return (
//         <View>
//             <Text>Home</Text>
//             <Button
//             title='Ir para Login' onPress={()=> navigation.push("Login")}
//             />
//         </View>
//     );    
//  }

// export default Home;