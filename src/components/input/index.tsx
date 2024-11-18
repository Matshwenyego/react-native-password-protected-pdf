import React, {FC} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  onChangeText: (text: string) => void;
  password: string;
  onSubmit: () => void;
  onCancel: () => void;
  passwordIncorrect: boolean;
}

const Input: FC<Props> = ({
  onChangeText,
  password,
  onSubmit,
  onCancel,
  passwordIncorrect,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, styles.text]}>Enter Password</Text>
      <Text style={styles.text}>This document is password protected</Text>
      <TextInput
        secureTextEntry
        keyboardType="numeric"
        aria-label="Password"
        value={password}
        onChangeText={onChangeText}
        placeholder="Password"
        style={styles.input}
      />
      {passwordIncorrect && (
        <Text style={styles.error}>Incorrect Password</Text>
      )}
      <View style={styles.direction}>
        <TouchableOpacity onPress={onCancel} style={styles.button}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSubmit}
          style={[styles.button, styles.primary]}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
