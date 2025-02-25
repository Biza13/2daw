import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import datos from '../json/productos.json'
import { ScrollView } from 'react-native-gesture-handler';


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
  imagen: {
    width: 90,
    height: 90
  },
  prod: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:8,
    boxShadow: 'lime',
    margin: 4,
    padding:8,
    flex: 1,
    alignItems: 'center'
  }
});


const ProductosGrid = () => {
  
  type Dato={
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:object;
  }
  const [productos, setProductos] = useState([])

  useEffect( () => {
    fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then((datos) => {
      setProductos(datos)
    })
  }, [])

    /* useEffect(() => {
      const getProductos = async()=>{
        const datos = await fetch("https://fakestoreapi.com/products");
        const response = await datos.json();
        setProductos(response)
      }

      getProductos();
    }, []) */

  return (
    <View style={styles.container}>
        
      {/*el scroll wiex es para poder hacer scroll sino no puedes hacerlo*/}
      <ScrollView>
        {
          productos.map((item:Dato) => (
            <View key={item.id} style={styles.prod}>
              
              <Image style={styles.imagen} source={{uri: item.image}} />
              <Text>{item.title}</Text>

            </View>
           
            
          ))
        }
      </ScrollView>  
      

      {/* <FlatList
        data={datos}
        renderItem={({item}) => (
          <View>
            <Image source={{ uri: item.image }} />
            <Text style={styles.item}>{item.id} {item.title}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default ProductosGrid;