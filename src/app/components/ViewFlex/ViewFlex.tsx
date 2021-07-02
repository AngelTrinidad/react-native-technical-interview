import React from 'react';
import { View, ViewProps } from 'react-native';

import styles from './styles';

type Props = ViewProps & {
  children?: React.ReactNode;
};

const ViewFlex: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
};

export default React.memo(ViewFlex);
