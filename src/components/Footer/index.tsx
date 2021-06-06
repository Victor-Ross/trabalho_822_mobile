import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native';


import styles from './styles';

export default function() {
  return (
    <View style={styles.container}>
      <FontAwesome name="facebook" size={30} />
      <FontAwesome name="instagram" size={30} />
      <FontAwesome name="linkedin" size={30} />
      <FontAwesome name="twitter" size={30} />
    </View>
  );  
}