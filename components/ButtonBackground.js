import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ButtonBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor:props.color}]}> 
         <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15,
    },

    text: {
      color: '#fff',
      fontSize: 18,   
    }
})

export default ButtonBackground;