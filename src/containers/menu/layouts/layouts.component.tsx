import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from 'react-native-ui-kitten';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import { LayoutsList } from '../../../components/menu';
import { LayoutsData } from './type';

interface ComponentProps {
  data: LayoutsData[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class LayoutsComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <LayoutsList
        contentContainerStyle={themedStyle.contentContainer}
        data={data}
        onItemPress={this.onItemPress}
      />
    );
  }
}

export const Layouts = withStyles(LayoutsComponent, (theme: ThemeType) => ({
  container: {
  },
  contentContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
  },
  item: {
    flex: 1,
    height: scale(16),
    marginHorizontal: scale(8),
    marginVertical: scale(8)
  },
}));
