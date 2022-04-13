import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
export default function Subscribe() {

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

        
<TouchableOpacity style={styles.btn_title}>
          <Text style={styles.btn_text}>Criar nova conta</Text>
        </TouchableOpacity>

        <TextInput style={styles.input}
          placeholder='Nome completo'
          textContentType='name'
          autoCorrect={false}
          onChangeText={()=>{}}
        />

         <TextInput style={styles.input}
          placeholder='Número de telefone'
          keyboardType='number-pad'
          textContentType='telephoneNumber'
          autoCorrect={false}
          onChangeText={() => { }}
          maxLength={11}
        />

         <TextInput style={styles.input}
          placeholder='Endereço de e-mail'
          keyboardType='email-address'
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TextInput style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        
        <TouchableOpacity style={styles.btn_register}>
          <Text style={styles.register_text}>Criar conta</Text>
      </TouchableOpacity>

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
  
  input: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft:7,
  },

  btn_Submit: {
    backgroundColor: '#61aadb',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
  },

  submit_text: {
    color: '#fff',
    fontSize: 18,
  },

  btn_register: {
    backgroundColor: '#61aadb',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,

  },

  register_text: {
    color:'#fff',
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