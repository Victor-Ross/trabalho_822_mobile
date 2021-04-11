import React from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import pernalongaImg from '../../images/alunos/perna.png';
import patolinoImg from '../../images/alunos/patolino.png';
import picapauImg from '../../images/alunos/picapau.png';

import styles from './styles';

function StudentImage() {
  return (
    <ScrollView horizontal={true} pagingEnabled={false}>
      <View style={styles.studentImageContainer}>
        <Image style={styles.studentImage} source={pernalongaImg} />
      </View>
      <View style={styles.studentImageContainer}>
        <Image style={styles.studentImage} source={patolinoImg} />  
      </View>
      <View style={styles.studentImageContainer}>
        <Image style={styles.studentImage} source={picapauImg} />  
      </View>
    </ScrollView>
  );
}

export default StudentImage;