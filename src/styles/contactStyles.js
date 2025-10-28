import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4660f3ff',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#cd0808ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cfbe06ff',
  },
  phone: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
});

export default styles;
