import React from 'react';
import { ThemeKey } from './';

export interface ThemeContextType {
  currentTheme: ThemeKey
}

const initialValue: ThemeContextType = {
  currentTheme: 'Eva Light'
};

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(initialValue);
