import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../images/logo.png';

import styles from './styles';

export default function() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconsContainer}>
        <Image style={{ height: 70, width: 70, resizeMode: 'contain' }} source={logoImg} />
        <View style={styles.headerIcons}>
          <View style={styles.search}>
            <FontAwesome style={styles.searchIcon} name="search" size={25} />
          </View>
          <FontAwesome style={styles.icon} name="user" size={25} />
          <FontAwesome style={styles.icon} name="shopping-cart" size={25} />
        </View>
      </View>
      <View style={styles.menu}>
        <RectButton onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Inicio</Text>
        </RectButton>
        <RectButton onPress={() => navigation.navigate('Produtos')}>
          <Text style={styles.menuText}>Produtos</Text>
        </RectButton>
        <RectButton onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.menuText}>Cadastro</Text>
        </RectButton>
      </View>
    </View>
  );  
}