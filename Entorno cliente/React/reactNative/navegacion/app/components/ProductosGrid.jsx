import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
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

  const [productos, setProductos] = useState([])

  useEffect( () => {
    fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(datos => {
      setProductos([...datos])
    })
  })

  return (
    <View style={styles.container}>
        
      {/* {
        productos.map(item => {
          return 
        })
      } */}

      <FlatList
        data={datos}
        renderItem={({item}) => (
          <View>
            <Image source={{ uri: item.image }} />
            <Text style={styles.item}>{item.id} {item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductosGrid;