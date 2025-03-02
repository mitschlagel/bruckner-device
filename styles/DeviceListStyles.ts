import { StyleSheet } from 'react-native';
import globalStyles from './globalStyles';

export default StyleSheet.create({
  ...globalStyles,
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});