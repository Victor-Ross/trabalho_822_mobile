import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20
  },

  perfilContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },

  imageContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    borderColor: '#b504a9'
  },

  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },

  dataContainer: {
    justifyContent: 'space-evenly',
    width: '50%'
  },

  dataName: {
    fontSize: 18
  },

  dataClass: {
    color: '#cccccc'
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '57%',
    marginLeft: 120
  },

  rejectButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b504a9'
  },

  rejectButtonText: {
    color: '#b504a9'
  },

  acceptButton: {
    padding: 15,
    backgroundColor: '#b504a9',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff'
  },

  acceptButtonText: {
    color: '#fff'
  }
});

export default styles;