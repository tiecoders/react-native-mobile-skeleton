import { ThemeType } from 'react-native-ui-kitten';
import { ThemeKey } from '../../../core/themes';

export interface Theme {
  name: ThemeKey;
  theme: ThemeType;
}
