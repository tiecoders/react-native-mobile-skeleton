import React from 'react';
import { SafeAreaView } from '../../core/navigation';
import {
  ThemeProvider,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import {
  ColorPaletteIconOutline,
  LayoutIconOutline,
  StarIconOutline,
} from '../../assets/icons';
import { themes } from '../../core/themes';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class MenuComponent extends React.Component<Props> {

  private onTabSelect = (index: number) => {
    this.props.onTabSelect(index);
  };

  public render(): React.ReactNode {
    const { selectedIndex, themedStyle } = this.props;

    return (
      <SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={{...this.props.theme, ...themes['App Theme']}}>
          <BottomNavigation
            appearance='noIndicator'
            selectedIndex={selectedIndex}
            onSelect={this.onTabSelect}>
            <BottomNavigationTab
              title='First'
              icon={LayoutIconOutline}
            />
            <BottomNavigationTab
              title='Second'
              icon={StarIconOutline}
            />
            <BottomNavigationTab
              title='Third'
              icon={ColorPaletteIconOutline}
            />
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  safeAreaContainer: {
    backgroundColor: theme['background-basic-color-1'],
  },
}));
