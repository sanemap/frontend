import React, { useState, useContext } from "react";
import Pipeline from "../../assets/pipeline.png";
import BotaoLargo from "../components/BotaoLargo";
import { useNavigation } from "@react-navigation/native";
import TextInputStyled from "../components/TextInputStyled";
import { AuthContext } from "../../src/contexts/auth";
import { Image, View, StyleSheet, Text, TouchableOpacity, useWindowDimensions, StatusBar, KeyboardAvoidingView, ScrollView } from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const windowHeight = useWindowDimensions().height;

  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    signIn(email, password);
  };

  const recoverPassword = () => {
    console.log("recuperando senha...");
  };

  const sendToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View automaticallyAdjustKeyboardInsets={true} style={[styles.container, {minHeight: Math.round(windowHeight)}]}>
      <Image source={Pipeline} style={styles.image} />
      <View style={styles.containerForm}>
        <View>
          <TextInputStyled state={email} setState={setEmail} label="Email" />
          <TextInputStyled
            state={password}
            setState={setPassword}
            label="Password"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-10%",
          }}
        >
          <TouchableOpacity onPress={recoverPassword}>
            <Text style={[styles.formatText, { color: "#0668B8", marginTop: 20 }]}>
              Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.formatText}>NÃ£o tem conta? </Text>
            <TouchableOpacity onPress={sendToRegister}>
              <Text style={[styles.formatText, { color: "#0668B8" }]}>
                Crie uma
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <BotaoLargo
          paddingButton={16}
          texto={"Entrar"}
          icone={false}
          onPress={handleLogin}
        />
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.orText}>OU</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerButtons}>
        <View style={{ marginVertical: 10 }}>
          <BotaoLargo
            paddingButton={16}
            icone={"google"}
            titulo={"Entrar com Google"}
            texto={"Entrar com Google"}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <BotaoLargo
            style={styles.marginCustom}
            paddingButton={16}
            icone={"facebook"}
            titulo={"Entrar com Facebook"}
            texto={"Entrar com Facebook"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  marginCustom: {
    marginHorizontal: 5,
  },
  containerButtons: {
    flex: 0.5,
    justifyContent: "flex-end",
    padding: 40
  },
  containerForm: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 40,
    marginTop: 140,
    paddingBottom: 40
  },
  image: {
    position: "absolute",
    width: "50%",
    height: "15%",
    resizeMode: "contain",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#A4ABBD",
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#A4ABBD",
  },
});