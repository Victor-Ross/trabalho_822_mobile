import React from 'react';
import { View, ScrollView, ImageBackground, Text } from 'react-native';

import Header from '../../components/Header/Header';
import AddSolicitation from '../../components/AddSolicitation/AddSolicitation';

import loginBackgroundImg from '../../images/grafismos/login_background.png';

import styles from './styles';

export default function AcceptStudent() {
  return (
    <ScrollView>
      <ImageBackground source={loginBackgroundImg} style={styles.container}>
        <Header title="Solicitações" route="/groups" />

        <View style={styles.addSolicitationsContainer}>
        <Text style={styles.titleText}>Solicitações</Text>
          <AddSolicitation name="pernalonga" class="Gestão de Design" />
          <AddSolicitation name="patolino" class="Fotografia" />
          <AddSolicitation name="picapau" class="WebDesign" />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Contato</Text>
          <Text style={styles.footerText}>grupou_contato@gmail.com</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}