/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useThemeStore } from '@/store/useThemeStore';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useThemeStore();
  const colorFromProps = props[theme ?? 'light'];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme ?? 'light'][colorName];
  }
}
