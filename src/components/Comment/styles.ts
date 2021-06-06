import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: 150,
    height: 100,

    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15
  },

  imageContainer: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 100/2
  },

  perfilCommentImage: {
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: 100/2
  },

  nameCommentContainer: {
    justifyContent: 'space-around',

    height: '100%',
    width: '100%'
  },

  textComment: {
    fontWeight: 'bold',
    fontSize: 17
  }
});

export default styles;