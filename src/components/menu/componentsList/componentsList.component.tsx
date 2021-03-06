import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import {
  ListRenderItemInfo,
  Dimensions,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  List,
  ListProps,
} from 'react-native-ui-kitten';
import {
  ComponentsListItem,
  ComponentsListItemProps,
} from './componentsListItem.component';
import { ComponentsListItemData } from './type';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: ComponentsListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ComponentsListItemData>) => React.ReactElement<any>;
}

export type ComponentsListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ComponentsListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<ComponentsListItemData>;

class ComponentsListComponent extends React.Component<ComponentsListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <ComponentsListItem
        style={this.props.themedStyle.item}
        activeOpacity={0.75}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <List
        numColumns={2}
        columnWrapperStyle={themedStyle.columnWrapperStyle}
        renderItem={this.renderItem}
        {...restProps}
      />
    );
  }
}

export const ComponentsList = withStyles(ComponentsListComponent, (theme: ThemeType) => ({
  item: {
    flex: 1,
    height: scale(160),
    maxWidth: itemWidth,
    marginHorizontal: moderateScale(18),
    marginVertical: verticalScale(8),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
}));
