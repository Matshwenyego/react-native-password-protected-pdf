import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 340,
    borderRadius: 4,
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 20,
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    borderWidth: 0.5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20,
  },
  primary: {
    marginLeft: 10,
    backgroundColor: 'gray',
  },
});

export default styles;
