import React, {FC} from 'react';
import Pdf, {Source} from 'react-native-pdf';
import styles from './styles';

interface Props {
  onError: (error: object) => void | undefined;
  onLoadComplete: () => void;
  source: number | Source;
  password?: string | undefined;
}

const Document: FC<Props> = ({
  source,
  onError,
  password,
  onLoadComplete,
  ...props
}) => {
  return (
    <Pdf
    source={source}
    onError={onError}
    onLoadComplete={onLoadComplete}
    password={password}
    style={styles.container}
    {...props}
  />
  );
};

export default Document;
