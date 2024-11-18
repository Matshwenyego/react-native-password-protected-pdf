import React, {useState, FC} from 'react';
import {View, Keyboard} from 'react-native';
import Input from '../components/input';
import Spinner from '../components/spinner';
import Document from '../components/document';
import styles from './styles';

const PasswordDocument: FC = () => {
  // Add your password document to assets folder and import here
  const source = require('../assets/Certificate(s).pdf');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  const onError = (error: object) => {
    const message = error?.message?.toLowerCase()?.replace(/\s+/g, '');
    const regex = /passwordrequired|incorrectpassword\./;
    if (regex.test(message)) {
      if (isLoading) {
        setPasswordIncorrect(true);
      }
      setIsPasswordRequired(true);
    }
    setIsLoading(false);
  };

  const onChangeText = (text: string) => {
    setPassword(text);
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    setIsLoading(true);
    setIsPasswordRequired(false);
  };

  const onCancel = () => {
    setIsPasswordRequired(false);
  };

  const onLoadComplete = () => {
    setIsLoading(false);
    setIsPasswordRequired(false);
    setPasswordIncorrect(false);
  };

  return (
    <View style={styles.container}>
      {!isPasswordRequired && (
        <Document
          {...(password && {password: password})}
          source={source}
          onError={onError}
          onLoadComplete={onLoadComplete}
        />
      )}
      {isPasswordRequired && (
        <View style={styles.password}>
          <Input
            password={password}
            passwordIncorrect={passwordIncorrect}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            onCancel={onCancel}
          />
        </View>
      )}
      {isLoading && <Spinner />}
    </View>
  );
};

export default PasswordDocument;
