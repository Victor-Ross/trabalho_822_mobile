import React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface produtoProps {
  url: string,
  nome: string,
  preco: number;
  comentario: string;
}

interface ProdutosProps {
  produtos: produtoProps[]
}

export default function({ produtos } : ProdutosProps) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        { produtos.map(produto => {
          return (
            <TouchableOpacity 
              key={produto.nome}
              onPress={() => navigation.navigate('Produto', {nome: produto.nome, url: produto.url, preco: produto.preco})}
            >
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <Image 
                source={{ uri: produto.url}} 
                style={{ width: 130, height: 130 }}
              />
              <View style={styles.textosContainer}>
                <Text style={[{ textDecorationLine: 'underline', fontWeight: 'bold' }, styles.descricaoTextos]}>{ produto.nome }</Text>
                <Text style={styles.descricaoTextos}>Preço R$ {produto.preco.toFixed(2)}</Text>
                <Text style={styles.descricaoTextos}>{ produto.comentario }</Text>
              </View>
            </View>
            <View style={{borderBottomColor: '#c8c8c8', borderBottomWidth: 3 }} />
            </TouchableOpacity>
          );
        }) }
      </View>
    </View>
  );  
}