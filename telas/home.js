import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet, Animated, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonBackground from '../components/ButtonBackground';



export default function Home() {
  
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  }, []);

const navigation = useNavigation()

  return (

    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.containerLogo}>
        <Image source={require('../telas/img/logo.png')}
        />
      </View>
       
      <Animated.View style={[
        styles.container,
        {
          opacity:opacity,
          transform: [
          {translateY: offset.y}
        ]
        }
      ]}>
        
          <ButtonBackground
          text='Fazer Login'
          color='#61aadb'
          onPress={() => navigation.push("Login")}
        />
        
          <ButtonBackground
          text='Criar conta'
          color='#000'
          onPress={() => navigation.push("Subscribe")}
            />

      </Animated.View>

    <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003275',
  },

  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    paddingBottom:40
  },

  btn_register: {
    backgroundColor: '#000',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,

  },

  register_text: {
      color: '#fff',
      fontSize: 18,
    },
  
   btn_title: {
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
      },
    btn_text: {
        color: '#fff',
        fontSize: 25,
      }

});
