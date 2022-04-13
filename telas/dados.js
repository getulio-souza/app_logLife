import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet, Animated, TextInput, } from 'react-native';

export default function Dados() {

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

       {/* <View style={styles.containerLogo}>
         <Image source={require('../telas/img/logo.png')}
        />
      </View> */}
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
          <Text style={styles.btn_text}>LANÇAMENTO DA COLETA</Text>
        </TouchableOpacity>
      
        {/* <PickerComponent/> */}

  
        <View style={styles.protocolo_cliente}>
        <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Protocolo:</Text>
            <TextInput
              keyboardType='number-pad'
              placeholder='ex: 123218378273'
              autoCorrect={false}
              onChangeText={() => { }}
              maxLength={17}
            />
          </TouchableOpacity>
          
        <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Cliente:</Text>
            <TextInput
              placeholder='ex: Fleury'
              autoCorrect={false}
              onChangeText={()=>{}}
            />
        </TouchableOpacity>
        </View>
      
        <View style={styles.protocolo_cliente}>
          <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Remetente:</Text>
            <TextInput
              placeholder='ex: José de Souza'
              autoCorrect={false}
              onChangeText={()=>{}}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Responsável:</Text> 
            <TextInput
              placeholder='ex: joao da silva'
              autoCorrect={false}
              onChangeText={()=>{}}
            />
        </TouchableOpacity>
        </View>

        <View style={styles.protocolo_cliente}>
          <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Volume:</Text> 
            <TextInput
              keyboardType='number-pad'
              placeholder='ex: 1,2,3,4,5'
              autoCorrect={false}
              onChangeText={() => { }}
              maxLength={2}
            />
        </TouchableOpacity>
          <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Amostras:</Text> 
            <TextInput
              keyboardType='number-pad'
              placeholder='ex: 1,2,3,4,5'
              autoCorrect={false}
              onChangeText={()=>{}}
            />
        </TouchableOpacity>
     
          </View>
          
         
        <View style={styles.protocolo_cliente}>
         <TouchableOpacity style={styles.btn_option}>
            <Text style={styles.submit_text}>Observações:</Text> 
            <TextInput
              multiline={true}
              maxLength={20}
              placeholder='Digite seu comentário'
              autoCorrect={false}
              onChangeText={()=>{}}
            />
        </TouchableOpacity>
          <TouchableOpacity style={styles.btn_option_upload}>
            <Text style={styles.submit_text_upload}>Enviar imagem</Text>
        </TouchableOpacity>
        </View>
        

        <View style={styles.botoes}>
        <TouchableOpacity style={styles.btn_red}>
            <Text style={styles.submit_text}>Ocorrência</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_green}>
            <Text style={styles.submit_text}>Finalizar</Text>
        </TouchableOpacity>
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

      containerLogo: {
        flex: 1,
        justifyContent: 'center',
      },

      btn_title: {
        width: 250,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 15,
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 240,
        paddingBottom: 20,
      },
   

      full_data: {
    
      },

      //botão vermelho 
      btn_red: {
        backgroundColor: '#DC143C',
        padding: 12,
        marginRight: 7,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
      },

      //botão verde 
      btn_green: {
        backgroundColor: '#32CD32',
        padding: 12,
        marginLeft: 7,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
      },

      botoes: {
        flexDirection: 'row',
      },

      btn_option: {
        backgroundColor: '#61aadb', //remover o fundo azul claro
        padding: 12,
        margin: 2,
        height: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
      },

      btn_option_upload: {
        backgroundColor: '#fff',
        padding: 12,
        margin: 2,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
      },

      submit_text_upload: {
        color: '#61aadb'
      },

      //protocolo/cliente
      protocolo_cliente: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
   
      input: {
        backgroundColor: '#32CD32',
        width: 120,
        height: 40,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        paddingLeft: 7,
      },
   
      submit_text: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
      },

      btn_text: {
        color: '#fff',
        fontSize: 20,
        marginTop:12,
      },
    }
);