import { useTheme } from '@constants/theme';
import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';

import ViewContainer, { ViewContainerProps } from '../ViewContainer/ViewContainer';
import ViewFlex from '../ViewFlex/ViewFlex';

import styles from './styles';

const ScrollContainer: React.FC<ViewContainerProps> = ({
  withPadding,
  withBottomPadding,
  renderHeader,
  children,
  ...rest
}) => {
  const { sizes } = useTheme();

  const paddingStyles: ViewStyle = {
    padding: withPadding ? sizes.paddingScreen : 0,
    paddingBottom: withPadding && withBottomPadding ? sizes.paddingScreen : 0
  };

  return (
    <ViewContainer withPadding={false} withBottomPadding={false} {...rest}>
      <ScrollView style={styles.scrollView}>
        {renderHeader && renderHeader()}
        <ViewFlex style={paddingStyles}>{children}</ViewFlex>
      </ScrollView>
    </ViewContainer>
  );
};

export default React.memo(ScrollContainer);
