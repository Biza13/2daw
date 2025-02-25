import { Text, View, StyleSheet } from 'react-native';
import ProductosGrid from '../components/ProductosGrid'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Productos Ventana</Text>
      <ProductosGrid></ProductosGrid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontStyle: 'italic',
    borderBottomWidth: 2,
    borderColor: 'white',
    padding: 6, 
  },
});