import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten';

interface ComponentProps {
  iconStyle?: StyleProp<ImageStyle>;
}

export type SocialButtonProps = ThemedComponentProps & ButtonProps & ComponentProps;

class SocialAuthButtonComponent extends React.Component<SocialButtonProps> {

  private renderIcon = (style: ImageStyle): React.ReactElement<ImageProps> => {
    const { icon, iconStyle } = this.props;

    return icon({ ...style, ...StyleSheet.flatten(iconStyle) });
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <Button
        appearance='ghost'
        size='giant'
        {...restProps}
        icon={this.renderIcon}
      />
    );
  }
}

export const SocialButton = withStyles(SocialAuthButtonComponent, (theme: ThemeType) => ({
  icon: {
    width: scale(24),
    height: scale(24),
  },
}));
