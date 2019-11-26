import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  ImageProps,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from 'react-native-ui-kitten';
import { StarIconFill } from '../../../assets/icons';

type ComplexComponentShowcaseProps = ThemedComponentProps & ViewProps;

class ComplexComponentShowcaseComponent extends React.Component<ComplexComponentShowcaseProps> {
  public render(): React.ReactElement<ImageProps> {
    const { themedStyle } = this.props;

    return StarIconFill(themedStyle.icon);
  }
}

const ThemedComplexComponentShowcase = withStyles(ComplexComponentShowcaseComponent, (theme: ThemeType) => ({
  icon: {
    width: scale(32),
    height: scale(32),
    tintColor: theme['color-primary-default'],
  },
}));

export const ComplexComponentShowcase = () => {
  return (
    <ThemedComplexComponentShowcase />
  );
};
