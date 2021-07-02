import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default React.memo(Card);
