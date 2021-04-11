import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import { SoftSkills, HardSkills } from '../../components/Skill/Skill';

import SkillBar from '../../components/SkillBar/SkillBar';
import StudentImage from '../../components/StudentImage/StudentImage';

import Header from '../../components/Header/Header';

import loginBackgroundImg from '../../images/grafismos/login_background.png';

import styles from "./styles";

export default function StudentGroups() {

  return (
    <ScrollView>
      <ImageBackground source={loginBackgroundImg} style={styles.imageBackground}>
        <Header title="Comparativo de classe" route="/reviews" />

        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <View style={styles.skillComparativeContainer}>
          <Text style={styles.containersTitles}>Comparativo de skills</Text>
          <SkillBar 
            name="HTML" 
            nameColor="#9f9ea8" 
            width={100} 
            color="#3b89ff" 
            comparative="você" 
          />
          <SkillBar width={70} color="#c90862" comparative="turma" />

          <SkillBar 
            name="Manipulação de imagem" 
            nameColor="#9f9ea8" 
            width={75} 
            color="#3b89ff" 
            comparative="você" 
          />
          <SkillBar width={85} color="#c90862" comparative="turma" />

          <SkillBar 
            name="Prototipagem" 
            nameColor="#9f9ea8" 
            width={99} 
            color="#3b89ff" 
            comparative="você" 
          />
          <SkillBar width={75} color="#c90862" comparative="turma" />

          <SkillBar 
            name="Ilustração" 
            nameColor="#9f9ea8" 
            width={78} 
            color="#3b89ff" 
            comparative="você" 
          />
          <SkillBar width={80} color="#c90862" comparative="turma" />

          <SkillBar 
            name="Wireframe" 
            nameColor="#9f9ea8" 
            width={70} 
            color="#3b89ff" 
            comparative="você" 
          />
          <SkillBar width={82} color="#c90862" comparative="turma" />
        </View>

        <View style={styles.secondaryContainers}>
          <Text style={styles.containersTitles}>Alunos top skills</Text>
          <StudentImage />
        </View>

        <View style={styles.secondaryContainers}>
          <Text style={styles.containersTitles}>Minhas top hard skills</Text>
          <HardSkills name={["HTML", "CSS", "JS"]} />
        </View>

        <View style={styles.secondaryContainers}>
          <Text style={styles.containersTitles}>Minhas top soft skills</Text>
          <SoftSkills name={["Liderança", "Empatia", "Gestão de conflitos", "Comunicação"]} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}