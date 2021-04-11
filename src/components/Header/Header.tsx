import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface HeaderProps {
  title: string;
  route: string;
  back?: boolean;
}

export default function Header( { title, route, back }: HeaderProps ) {
  const navigation = useNavigation();

  function navigateTo() {
    navigation.navigate(route);
  }

  function goBack() {
   back ? navigation.navigate('/reviews') : navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={30} color="#15b6d6" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      <BorderlessButton onPress={navigateTo}>
        <Feather name="arrow-right" size={30} color="#15b6d6" />
      </BorderlessButton>
    </View>
  );

}