import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './styles';

type Props = TextProps & {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
};

export default React.memo(Title);
