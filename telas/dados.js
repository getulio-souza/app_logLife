import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView,TouchableOpacity, Text, TextInput, StyleSheet, Animated, Button  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonUpload from '../components/uploadBtn';
import ImagePicker from "react-native-image-picker"

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

const navigation = useNavigation()


  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps={'always'}
      
      style={styles.background}>

      <Animated.View style={[
        styles.container,
        {
          opacity:opacity,
          transform: [
          {translateY: offset.y}
        ]
        }
      ]}>
        <TouchableOpacity style={styles.title}>
          <Text style={styles.title_text}>Lançamento da coleta</Text>
        </TouchableOpacity>
      
        
        {/* <View style={styles.form_background}> */}

        <TouchableOpacity style={styles.two_boxes_column}>
          <View style={styles.box_left}>
          <Text style={styles.two_boxes_text}>protocolo</Text>
           <TextInput
              keyboardType='number-pad'
              placeholder='ex: 123218378273'
              autoCorrect={false}
              onChangeText={() => { }}
              maxLength={17}
          />
          </View>
          <View style={styles.box_right}>
          <Text style={styles.two_boxes_text}>Cliente</Text>
           <TextInput
              placeholder='ex: Fleury'
              autoCorrect={false}
              onChangeText={()=>{}}
              />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.two_box_row}>
          <View style={styles.one_box_row}>
            <Text style={styles.one_box_row_text}>Remetente</Text>
            <TextInput
              placeholder='ex: João da Siilva'
              autoCorrect={false}
              onChangeText={()=>{}}
              />
          </View>
          <View style={styles.one_box_row}>
            <Text style={styles.one_box_row_text}>Responsável</Text>
            <TextInput
              placeholder='ex: João da Silva'
              autoCorrect={false}
              onChangeText={()=>{}}
              />
          </View>
        </TouchableOpacity>
        


<TouchableOpacity style={styles.two_boxes_column}>
          <View style={styles.box_left}>
          <Text style={styles.two_boxes_text}>Volume</Text>
           <TextInput
              keyboardType='number-pad'
              placeholder='ex: 1,2,3,4,5'
              autoCorrect={false}
              onChangeText={() => { }}
              maxLength={2}
          />
          </View>
          <View style={styles.box_right}>
          <Text style={styles.two_boxes_text}>Nº de Amostras</Text>
           <TextInput style={styles.input_box_right}
              keyboardType='number-pad'
              placeholder='ex: 1,2,3,4,5'
              autoCorrect={false}
              onChangeText={() => { }}
              maxLength={2}
              />
          </View>
        </TouchableOpacity>

<TouchableOpacity style={styles.two_box_row}>
          <View style={styles.one_box_row}>
            <Text style={styles.one_box_row_text}>Observações:</Text>
            <TextInput
              placeholder='Digite seu comentário'
              autoCorrect={false}
              onChangeText={()=>{}}
              />
          </View>
          <View style={styles.one_box_row}>
            <Text style={styles.one_box_row_text}>Declaração</Text>
            <ButtonUpload
          text='Subir imagem'
          color='#61aadb'
          onPress={() => navigation.push("DadosEnviarImagem")}
        />
          </View>
        </TouchableOpacity>


        <View style={styles.botoes}>
        <TouchableOpacity style={styles.btn_red}>
            <Text style={styles.btn_text}>Ocorrência</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.btn_green}>
            <Text style={styles.btn_text}>Finalizar</Text>
        </TouchableOpacity>
          </View>
          
       {/* </View> */}
  
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

      form_background: {
        backgroundColor:'#fff'
      },

      title: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop:50,
        paddingBottom:15,
      },
      
      title_text: {
        color:'#fff',
        fontSize: 25,
        textAlign: 'center',
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 240,
        paddingBottom: 20,
      },

      two_boxes_column: {
      backgroundColor:'#fff',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      padding: 20,
      borderRadius: 5,
    },
    
      box_left: {
        marginRight: 20,
    },

      box_right: {
        marginLeft:20,
    },
      
      input_box_right: {
        textAlign:'center',
    },

    two_boxes_text:{
      textAlign: 'center',
      color: '#000',
      fontSize:17,
    },
      
      two_box_row: {
      flexDirection: 'column',
      backgroundColor:'#fff',
      alignItems: 'center',
      marginBottom: 15,
      padding: 20,
      borderRadius: 5,
      width:260,
      
      },
    
      one_box_row: {
        margin:5,
      },

      one_box_row_text: {
        textAlign: 'center',
      },

      //dois botões finais
      botoes: {
        flexDirection: 'row',
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

      btn_text: {
        color: '#fff',
        fontWeight:'900',
      }
      
    }
);