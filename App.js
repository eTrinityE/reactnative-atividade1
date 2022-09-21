import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import p1 from './assets/image/placa1.png';
import p2 from './assets/image/placa2.png';
import p3 from './assets/image/placa3.png';
import p4 from './assets/image/placa4.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      
      <Text style={styles.bar}>Pratica Layoult Flexbox</Text>
      <View style={styles.linhaDePlacas}>
        <Image style={styles.imagem} source={p1}></Image>
        <Image style={styles.imagem} source={p2}></Image>
      </View>
      <View style={styles.linhaDePlacas}>
        <Image style={styles.imagem} source={p3}></Image>
        <Image style={styles.imagem} source={p4}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    margin: 2
  },
  linhaDePlacas: {
    flexDirection: 'row',
    marginBottom: 0
  },
  bar:{
    backgroundColor: 'blue',
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 80,
    



  }
});

