import React from 'react';
import { View, ScrollView, Text, Image, ImageURISource } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface produtoProps {
  url: string,
  nome: string,
  preco: number;
}

interface ProdutosProps {
  title?: string;
  viewType: boolean;
  produtos: produtoProps[];
  
}

export default function({ viewType, title, produtos } : ProdutosProps) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginLeft: 15, fontSize: 30 }}>{ title }</Text>
      <ScrollView horizontal={viewType} pagingEnabled={false}>
        { produtos.map(produto => {
          return (
            <RectButton key={produto.url} onPress={() => { navigation.navigate('Produto', {nome: produto.nome, url: produto.url, preco: produto.preco}) }}>
              <View style={styles.produtoDescricao} >
                <Image source={{ uri: produto.url }} style={{ height: '70%', resizeMode: 'contain', width: '100%' }} />
                  <Text style={styles.text}>{ produto.nome }</Text>
                <Text style={styles.text}>R${ produto.preco.toFixed(2) }</Text>
              </View>
            </RectButton>
          );
        }) }
      </ScrollView>
    </View>
  );  
}