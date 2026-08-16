import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  style?: ViewStyle;
};

const Button = ({ title, loading, variant = 'primary', icon, style, disabled, ...props }: ButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      style={[styles.botao, isPrimary ? styles.primario : styles.secundario, disabled || loading ? styles.desabilitado : null, style]}
      activeOpacity={0.8}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#FFFFFF' : '#4F4F4F'} />
      ) : (
        <View style={styles.conteudo}>
          {icon ? <View style={styles.iconeWrapper}>{icon}</View> : null}
          <Text style={[styles.titulo, isPrimary ? styles.tituloPrimario : styles.tituloSecundario]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    width: '100%',
    minHeight: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  primario: {
    backgroundColor: '#4CAF50',
  },
  secundario: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
  },
  tituloPrimario: {
    color: '#FFFFFF',
  },
  tituloSecundario: {
    color: '#4F4F4F',
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeWrapper: {
    marginRight: 10,
  },
  desabilitado: {
    opacity: 0.65,
  },
});

export default Button;
