import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

import styles from './styles';

type Props = TextProps & {
  children?: React.ReactNode;
};

const Text: React.FC<Props> = ({ style, children, ...rest }) => {
  return (
    <NativeText style={[styles.text, style]} {...rest}>
      {children}
    </NativeText>
  );
};

export default React.memo(Text);
