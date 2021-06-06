import React from 'react';
import { StyleSheet } from 'react-native';

const styles  = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },

  titleText: { 
    marginTop: 20,
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
    fontSize: 20 
},

  formContainer: {
    justifyContent: 'space-around',

    width: '100%',
    height: 200,
  },

  input: {
    backgroundColor: '#ccc',
    height: 50,

    fontSize: 25
  },

  buttonLogin: {
    alignItems: 'center',
    
    backgroundColor: 'black',

    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },

  buttonConfirm: {
    alignItems: 'center',
    
    backgroundColor: 'green',

    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  }
});

export default styles;