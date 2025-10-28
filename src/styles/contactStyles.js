import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#1d4decff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#2b72dcff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
  phone: {
    fontSize: 15,
    color: '#ffffffff',
    marginTop: 4,
  },
});

export default styles;
