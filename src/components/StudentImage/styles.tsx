import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  studentImageContainer: {
    height: 125,
    width: 125,
    padding: 10,
    borderRadius: 125 / 2,
    borderWidth: 3,
    borderLeftColor: 'red',
    borderBottomColor: 'red',
    borderRightColor: 'red'
  },

  studentImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    overflow: 'hidden'
  }
});

export default styles;