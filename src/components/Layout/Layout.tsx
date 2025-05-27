// src/components/Layout.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
  style?: object;  
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};


export default Layout;