import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import pernalongaImg from '../../images/alunos/perna.png';
import patolinoImg from '../../images/alunos/patolino.png';
import picapauImg from '../../images/alunos/picapau.png';

import styles from './styles';

interface AddSolicitationProps {
  name: string;
  class: string;
}

export default function AddSolititation(props: AddSolicitationProps) {
  let image = picapauImg;
  {
    props.name == 'pernalonga' ? image = pernalongaImg 
    :
    props.name == 'patolino' ? image = patolinoImg  
    :
    props.name == 'picapau' ? image = picapauImg : image = ''
  }

  return(
    <View style={styles.container}>
      <View style={styles.perfilContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dataName}>{props.name}</Text>
          <Text style={styles.dataClass}>{props.class}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectButtonText}>Recusar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Aprovar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}