import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './styles';

const Title: React.FC<TextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
};

export default React.memo(Title);
