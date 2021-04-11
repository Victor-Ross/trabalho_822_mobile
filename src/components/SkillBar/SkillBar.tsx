import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface SkillBarProps {
  name?: string,
  nameColor?: string,
  width: number,
  color: string,
  comparative?: string
}

export default function SkillBar(props: SkillBarProps) {
  const [ skill, setSkill ] = useState(0);

  useEffect(() => {
    setSkill((props.width / 10));
  }, [props.width]);

  return (
    <View>
      { props.name && (
        <Text style={[styles.subjectName, { color: props.nameColor || '#000' }]}>
          { props.name }
        </Text>
      ) }
      <View style={styles.skillBarNumberContainer}>
        <View style={[ 
          styles.skillBar,
          { width: (props.width * 2),
          backgroundColor: props.color } 
        ]} 
        />
        <Text style={[ styles.skillPoints, { color: props.color } ]}>
          { skill }
        </Text>

        { props.comparative && (
          <Text style={[ styles.comparativeText, { color: props.color } ]}>
            { props.comparative }
          </Text>
        ) }
      </View>
    </View>
  );
}

