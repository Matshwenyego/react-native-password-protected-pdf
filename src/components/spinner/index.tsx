import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Spinner: FC = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'}/>
    </View>
  );
};

export default Spinner;
