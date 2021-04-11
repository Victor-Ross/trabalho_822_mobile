import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface SkillProps {
  name: string
}

interface SoftSkillsProps {
  name: string[]
}

interface HardSkillsProps {
  name: string[]
}

export function Skill(props: SkillProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.skillName}>{ props.name }</Text>
    </View>
  );
}

export function HardSkills(props: HardSkillsProps) {
  return (
    <View style={styles.hardSkillsContainer}>
      <View style={styles.hardSkillsNamesContainer}>
        <Text style={styles.teste}>{props.name[0]}</Text>
      </View>
      <View style={styles.hardSkillsNamesContainer}>
        <Text style={styles.teste}>{props.name[1]}</Text>
      </View>
      <View style={styles.hardSkillsNamesContainer}>
        <Text style={styles.teste2}>{props.name[2]}</Text>
      </View>
    </View>
  );
}

export function SoftSkills(props: SoftSkillsProps) {
  return (
    <View style={styles.softSkillsContainer}>
      {props.name.map((name, index) => {
        return(
          <View key={index} style={styles.softSkillsNameContainer}>
            <Text style={styles.softSkillsNames}>{name}</Text>
          </View>
        );
      })}
    </View>
  );
}

