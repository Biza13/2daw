import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Principal</Text>
      <Link href="/detalles">
        Detalles Vista
      </Link>
    </View>
  );
}
