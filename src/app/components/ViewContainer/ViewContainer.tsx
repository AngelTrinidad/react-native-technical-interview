import { useTheme } from '@constants/theme';
import React from 'react';
import { StatusBar, StatusBarStyle, ViewProps, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import ViewFlex from '../ViewFlex/ViewFlex';

import styles from './styles';

export type ViewContainerProps = ViewProps & {
  children?: React.ReactNode;
  safeAreasEdges?: Edge[];
  withPadding?: boolean;
  withBottomPadding?: boolean;
  contentStyles?: ViewStyle;
  statusBarColor?: string;
  statusBarStyle?: StatusBarStyle;
  renderHeader?: () => React.ReactNode;
};

const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  contentStyles,
  style,
  statusBarColor,
  renderHeader,
  statusBarStyle = 'light-content',
  safeAreasEdges = ['right', 'bottom', 'left'],
  withPadding = true,
  withBottomPadding = true,
  ...rest
}) => {
  const { sizes, colors } = useTheme();

  const containerStyles: ViewStyle = {
    backgroundColor: colors.primaryBackground
  };

  const paddingStyles: ViewStyle = {
    padding: withPadding ? sizes.paddingScreen : 0,
    paddingBottom: withPadding && withBottomPadding ? sizes.paddingScreen : 0
  };

  return (
    <SafeAreaView edges={safeAreasEdges} style={[styles.container, containerStyles, style]} {...rest}>
      <StatusBar backgroundColor={statusBarColor || colors.headerBackground} barStyle={statusBarStyle} />
      {!!renderHeader && renderHeader()}
      <ViewFlex style={[paddingStyles, contentStyles]}>{children}</ViewFlex>
    </SafeAreaView>
  );
};

export default React.memo(ViewContainer);
