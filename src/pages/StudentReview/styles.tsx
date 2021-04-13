import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56adf5',
    alignItems: 'center',
  },

  reviewContainer: {
    marginTop: 50,
    padding: 10,
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff'
  },

  reviewText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20
  },

  mediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginVertical: 15,
  },

  mediaNumberContainer: {
    justifyContent: 'space-evenly'
  },

  mediaNumberText1: {
    color: '#a7acb0',
    fontSize: 16
  },

  mediaNumberText2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#35d44d'
  },

  mediaNumberText3: {
    width: '70%',
    color: '#a7acb0',
    fontSize: 16
  },

  softSkillsReview: {
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },

  contactFooterContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4a0343',
    alignItems: 'center',
    marginTop: 20,
  },

  footercontactText: {
    color: '#fff',
    marginBottom: 10
  },

  socialLinksFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    marginVertical: 20
  },

  socialLinksImg: {
    height: 50,
    width: 50,
  },

  grupouFooter: {
    flexDirection: 'row',
  },

  grupouText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700'
  },

  footerChoices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#b80284'
  }
});

export default styles;