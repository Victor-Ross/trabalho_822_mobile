import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

type CommentProps = {
  foto: string;
  nome: string;
  comentario: string;
}

export default function Comment({ foto, nome, comentario }: CommentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: foto}} style={styles.perfilCommentImage} />
      </View>
      <View style={styles.nameCommentContainer}>
        <Text style={styles.textComment}>{ nome }</Text>
        <Text>{ comentario }</Text>
      </View>
    </View>
  );  
}