import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  // Perfil
  perfil: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#c4bdbc'
  },

  perfilImage: {
    height: 100,
    width: 100,
  },

  perfilDescription: {
    width: 150
  },

  studentName: {
    fontSize: 25,
    marginBottom: 10
  },

  groupName: {
    color: '#969392'
  },

  //  Hard Skills
  hardSkillsContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%',
    height: 300,
    justifyContent: 'space-between',
  },

  hardSkillsTitle: {
    fontSize: 25
  },

  // Soft Skills
  softSkillsContainer: {
    width: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },

  softSkillsTitle: {
    fontSize: 25
  },

  // Exit button
  exitButton: {
    marginTop: 20,
    width: '60%',
    height: 50,
    backgroundColor: '#ab0c90',
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },

  exitButtonText: {
    fontSize: 22,
    color: '#fff'
  }
});

export default styles;