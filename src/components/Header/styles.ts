import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',

    borderBottomWidth: 2,
    borderBottomColor: '#5b5b5c',
    backgroundColor: '#EDEDED'
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    width: '100%',
    marginTop: 50
  },

  search: {
    width: '70%',
    backgroundColor: '#ccc',
    alignItems: 'flex-end',
    padding: 5
  },

  searchIcon: {
    
  },

  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%'
  },

  menu: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '80%',
    marginTop: 10,
    marginBottom: 10,
  },

  menuText: {
    fontSize: 17,
    textTransform: 'uppercase'
  }
});

export default styles;