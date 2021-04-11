import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56adf5',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  },

  skillName: {
    color: '#fff'
  },

  hardSkillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  hardSkillsNamesContainer: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 4,
    padding: 28,
    borderColor: '#ff5ca0',

    justifyContent: 'space-between',
    alignItems: 'center'
  },

  teste: {
    width: 40,
    color: '#ff5ca0'
  },

  teste2: {
    color: '#ff5ca0'
  },

  softSkillsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  softSkillsNameContainer: {
    backgroundColor: '#56adf5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },

  softSkillsNames: {
    color: '#fff'
  }
})

export default styles;