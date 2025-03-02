import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16, // Lower the text by 16px
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0055',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    marginRight: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },
});