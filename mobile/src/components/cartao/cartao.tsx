import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type CardProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

const Card = ({ children, style }: CardProps) => {
  return <View style={[styles.cartao, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  cartao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#D9E7D8',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    elevation: 8,
  },
});

export default Card;
