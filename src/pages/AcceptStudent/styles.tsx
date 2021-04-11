import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  addSolicitationsContainer: {
    marginTop: 30
  },

  titleText: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 30,
    color: '#000'
  },

  footerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#57094d',

    alignItems: 'center',
    justifyContent: 'center'
  },

  footerText: {
    color: '#fff',
    fontSize: 14,

    marginBottom: 5
  }
});

export default styles;