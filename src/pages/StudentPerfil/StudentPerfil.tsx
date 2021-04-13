import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/Header';
import SkillBar from '../../components/SkillBar/SkillBar';
import { Skill } from '../../components/Skill/Skill';

import pernalongaImg from '../../images/alunos/perna.png';

import styles from './styles';

export default function StudentPerfil() {
  const navigation = useNavigation();

  function goBackToGroups() {
    navigation.navigate('/acceptStudent');
  }

  return (
    <ScrollView>
      <Header title="Perfil do estudante" back route="/acceptStudent" />

      <View style={styles.container}>
        <View style={styles.perfil}>
          <View style={styles.perfilImage}>
            <Image source={pernalongaImg} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={styles.perfilDescription}>
            <Text style={styles.studentName}>Pernalonga</Text>
            <Text style={styles.groupName}>Está no seu grupo de Gestão de Design</Text>
          </View>
        </View>

        <View style={styles.hardSkillsContainer}>
          <Text style={styles.hardSkillsTitle}>Hard skills</Text>
          <SkillBar name="HTML" width={92} color="#c90862" />
          <SkillBar name="Prototipação" width={88} color="#c90862" />
          <SkillBar name="CSS" width={92} color="#c90862" />
          <SkillBar name="JavaScript" width={88} color="#c90862" />
        </View>
        <View>
          <Text style={styles.softSkillsTitle}>Soft skills</Text>
          <View style={styles.softSkillsContainer}>
            <Skill name="Liderança" />
            <Skill name="Empatia" />
            <Skill name="Gestão de conflitos" />
            <Skill name="Comunicação" />
          </View>
        </View>  
      
        <RectButton style={styles.exitButton} onPress={goBackToGroups}>
          <Text style={styles.exitButtonText}>Fechar</Text>
        </RectButton>
      </View>  
    </ScrollView>
  );
}