import React from 'react';
import {SafeAreaView} from 'react-native';
import PasswordDocument from './screens';
import styles from './styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <PasswordDocument />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default App;
