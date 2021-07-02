import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

import styles from './styles';

const Text: React.FC<TextProps> = ({ style, children, ...rest }) => {
  return (
    <NativeText style={[styles.text, style]} {...rest}>
      {children}
    </NativeText>
  );
};

export default React.memo(Text);
