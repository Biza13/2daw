import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import datos from '../json/productos.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
});

const ProductosGrid = () => {

  return (
    <View style={styles.container}>
        
      <FlatList
        data={datos}
        renderItem={({item}) => <Text style={styles.item}>{item.id} {item.title}</Text>}
      />
    </View>
  );
};

export default ProductosGrid;