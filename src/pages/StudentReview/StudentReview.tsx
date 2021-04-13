import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import Header from '../../components/Header/Header';
import { SoftSkills } from '../../components/Skill/Skill';

import faceImage from '../../images/icones/faces_avaliacao/icone_face_4.png';
import linkedinImg from '../../images/icones/logo_linkedin.png';
import facebookImg from '../../images/icones/logo_facebook.png';
import instagramImg from '../../images/icones/logo_instagram.png';
import grupouImg from '../../images/icones/icone_dashboard.png';
import gruposImg from '../../images/icones/icone_grupos.png';
import perfilImg from '../../images/icones/icone_perfil.png';
import skillsImg from '../../images/icones/icone_skills.png';
import disciplinasImg from '../../images/icones/icone_disciplinas.png';


import styles from './styles';

export default function StudentReview() {
  return (
    <ScrollView>
      <Header title="Sua avaliação" route="/" />

      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>Avaliações recebidas</Text>
          <View style={styles.mediaContainer}>
          <Image source={faceImage} />
            <View style={styles.mediaNumberContainer}>
              <Text style={styles.mediaNumberText1}>Sua média</Text>
              <Text style={styles.mediaNumberText2}>3,9</Text>
            </View>
          </View>
        </View>

        <View style={styles.softSkillsReview}>
          <Text style={styles.mediaNumberText3}>Seus colegas te avaliam com as seguintes soft skills:</Text>
          <SoftSkills 
            name={['Liderança', 'Empatia', 'Gestão de conflitos', 'Comunicação', 'Compromisso', 'Determinação']} 
          />
        </View>

        <View style={styles.contactFooterContainer}>
          <Text style={styles.footercontactText}>Contato</Text>
          <Text style={styles.footercontactText}>grupou_contato@gmail.com</Text>

          <View style={styles.socialLinksFooter}>
            <Image style={styles.socialLinksImg} source={linkedinImg} />
            <Image style={styles.socialLinksImg} source={instagramImg} />
            <Image style={styles.socialLinksImg} source={facebookImg} />
          </View>

          <View style={styles.grupouFooter}> 
            <Image source={grupouImg} />
            <Text style={styles.grupouText}>Grupou!</Text>
          </View> 
        </View>
        <View style={styles.footerChoices}>
            <Image source={grupouImg} />
            <Image source={gruposImg} />
            <Image source={disciplinasImg} />
            <Image source={skillsImg} />
            <Image source={perfilImg} />
          </View>
      </View>
    </ScrollView>
  );
}