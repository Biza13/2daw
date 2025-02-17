import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}
    >
      <View style={styles.formulario}>
        <Text>login</Text>
        <TextInput
          style={styles.input}
          placeholder={"Please type here…"}
          value={login}
          onChange={(e) => setLogin(e.nativeEvent.text)}
        />
        <Text>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder={"Please type here…"}
          value={password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />
        <Button
          onPress={() => alert(login + " " + password)}
          title="LogIn"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formulario: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});