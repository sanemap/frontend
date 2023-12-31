import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function BotaoLargo({ icone, titulo, texto, paddingButton, fontSizeButton = 22, onPress }) {
  const styles = StyleSheet.create({
    botao: {
      borderWidth: 2,
      borderColor: "#0668B8",
      borderRadius: 18
    },
  
    containerBotao: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0668B8",
      borderColor: "#FFF",
      borderWidth: 2,
      borderRadius: 18,
      padding: paddingButton,
    },
  
    textoSemIcone: {
      color: "#f8fafc",
      fontWeight: "bold",
      fontSize: fontSizeButton
    },
    
    textoComIcone: {
      textAlign: "center",
      marginLeft: "2%",
      color: "#f8fafc",
      fontWeight: "bold",
      fontSize: fontSizeButton
    },
  });
  
  const RenderBotao = () => {
    if(icone === false) {
      return (
        <View style={styles.containerBotao}>
          <Text style={styles.textoSemIcone}> { texto } </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.containerBotao}>
          <View>
            <FontAwesome5 name={icone} size={24} height={28} color={"#ffe"}  />         
          </View>
          <Text style={styles.textoComIcone}> { texto } </Text>
        </View>
      );
    }
  }

  return (
    <TouchableOpacity title={titulo} onPress={onPress} style={styles.botao}>
     <RenderBotao />
    </TouchableOpacity>
  );
}


