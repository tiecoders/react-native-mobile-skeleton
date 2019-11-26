import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  ListItem,
  ListItemProps,
  Text,
} from 'react-native-ui-kitten';

interface ComponentProps {
  title: string;
}

export type ThemeCardComponentProps = ThemedComponentProps & ListItemProps & ComponentProps;

export class ThemeCardComponent extends React.Component<ThemeCardComponentProps> {

  private getCardStatus = (): string => {
    return this.props.disabled ? 'ACTIVE' : '';
  };

  private renderColors = (style: StyleType, index: number): React.ReactElement<ViewProps> => {
    const { themedStyle } = this.props;

    return (
      <View
        key={index}
        style={[themedStyle.colorItem, style]}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, style, title, ...restProps } = this.props;

    const colors: StyleType[] = [
      themedStyle.colorItem1,
      themedStyle.colorItem2,
      themedStyle.colorItem3,
      themedStyle.colorItem4,
      themedStyle.colorItem5,
      themedStyle.colorItem6,
    ];

    const cardStatus: string = this.getCardStatus();

    return (
      <ListItem
        {...restProps}
        style={[themedStyle.container, style]}>
        <View style={themedStyle.headerContainer}>
          <Text
            style={themedStyle.titleLabel}
            category='h6'>
            {title}
          </Text>
          <Text category='label'>
            {cardStatus}
          </Text>
        </View>
        <View style={themedStyle.colorContainer}>
          {colors.map(this.renderColors)}
        </View>
      </ListItem>
    );
  }
}

export const ThemeCard = withStyles(ThemeCardComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorContainer: {
    marginTop: scale(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleLabel: {
    flex: 1,
  },
  colorItem: {
    width: scale(40),
    height: scale(40),
    borderRadius: moderateScale(6),
    marginHorizontal: scale(2),
  },
  colorItem1: {
    backgroundColor: theme['background-basic-color-2'],
  },
  colorItem2: {
    backgroundColor: theme['background-basic-color-3'],
  },
  colorItem3: {
    backgroundColor: theme['background-alternative-color-2'],
  },
  colorItem4: {
    backgroundColor: theme['background-alternative-color-1'],
  },
  colorItem5: {
    backgroundColor: theme['text-basic-color'],
  },
  colorItem6: {
    backgroundColor: theme['color-primary-default'],
  },
}));
