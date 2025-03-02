import { StyleSheet } from 'react-native';
import globalStyles from './globalStyles';

export default StyleSheet.create({
  ...globalStyles,
  titleContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 0, 85, 0.5)', // Same color as the button with opacity
    paddingHorizontal: 20,
    paddingVertical: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 36,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0055',
    padding: 16,
    borderRadius: 8,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    marginRight: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 120,
    padding: 24 // Adjust to start below the title container
  },
  listContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  bottomSheetContent: {
    padding: 20,
    alignItems: 'center',
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#ff0055',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
});