import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

export default function Selecao() {

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
          <Text style={styles.btn_text}>Selecione uma opção:</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.submit_text}>Coletas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.submit_text}>Embarques</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.submit_text}>Desembarques</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_Submit}>
          <Text style={styles.submit_text}>Entregas</Text>
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
    fontSize: 18,
  },

  register_text: {
    color:'#fff',
  }

});