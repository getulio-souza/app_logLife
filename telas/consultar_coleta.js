import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet, Animated, } from 'react-native';
// import PickerComponent from './components/picker';

export default function Consulta() {

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
          <Text style={styles.btn_text}>Consulte sua coleta:</Text>
        </TouchableOpacity>
      
        {/* <PickerComponent/> */}
        

        <View style={styles.allBtn}>
        <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_option}>
          <Text style={styles.submit_text_special}>Remetente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_option}>
          <Text style={styles.submit_text}>Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_option}>
          <Text style={styles.submit_text}>Entregas</Text>
          </TouchableOpacity>
        </View>
           <View style={styles.btn_Submit}>
          <Text style={styles.submit_btn}>Buscar</Text>
        </View>
  
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

  btn_option: {
    backgroundColor: '#61aadb',
    padding:12,
    margin:2,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
  },

    //botão "buscar"
  btn_Submit: {
    backgroundColor: '#fff',
    color:'#61aadb',
    padding:12,
    height: 45,
    borderRadius: 7,
    marginBottom: 15,
    textAlign:'center',
  },
  
  //botão "buscar"
  submit_btn: {
    color: '#61aadb',
    fontSize: 20,
  },

   //conjunto de botões
   allBtn: {
    flex: 1,
    flexDirection: 'row',
  },

  submit_text: {
    color: '#fff',
    fontSize: 17,
  },


  //remetente 
  submit_text_special: {
      color: '#fff',
    fontSize: 12, //texto menor para caber dentro do botão
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
  ,
 

});