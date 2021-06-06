import React from 'react';
import { Text, ScrollView, Image, View, Button } from 'react-native';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { RouteStackParamList } from '../../RouteParamList';


import styles from './styles';


export default function Produto({ navigation, route }: RouteStackParamList<"Produto">) {
  return(
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 30 }}>{ route.params.nome }</Text>
        </View>
        <View style={styles.produtoContainer}>
          <Image source={{uri: route.params.url}} style={{ height: '100%', width: '100%' }} />
        </View>
        <Button title="comprar" onPress={() => {}}><Text>Comprar</Text></Button>
        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 20 }}>Informações</Text>
          <Text>R$ { route.params.preco.toFixed(2) }</Text>
        </View>
        <View style={styles.avaliacoesContainer}>
          <Comment 
            foto="https://avatars.githubusercontent.com/u/78884874?s=400&u=1e9cd84240fa377243568165be57492804184a3f&v=4" 
            nome="Riquelme" 
            comentario="mt bom!!" 
          />
          <Comment 
            foto="https://i.pinimg.com/280x280_RS/c8/65/fa/c865fa11cc077f1bfbdb8fb67108c7fa.jpg" 
            nome="Rômulo" 
            comentario="Quebrou em dois dias :x " 
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}