import React from 'react';
import { View } from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from 'react-native-ui-kitten';
import {
  ComponentsList,
  ComponentsListItemData,
} from '../../../components/menu';

interface ComponentProps {
  data: ComponentsListItemData[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ComponentsComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <View style={themedStyle.container}>
        <ComponentsList
          contentContainerStyle={themedStyle.contentContainer}
          data={data}
          onItemPress={this.onItemPress}
        />
      </View>
    );
  }
}

export const Components = withStyles(ComponentsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
  },
}));
