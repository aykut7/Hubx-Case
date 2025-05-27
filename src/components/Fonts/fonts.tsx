// src/components/fonts.ts
import { TextStyle } from 'react-native';

const fonts: Record<string, TextStyle['fontFamily']> = {
  regular: 'Rubik_Regular',
  medium: 'Rubik_Medium',
  bold: 'Rubik_Bold',
  light: 'Rubik_300Light', // Eğer varsa
};

export default fonts;