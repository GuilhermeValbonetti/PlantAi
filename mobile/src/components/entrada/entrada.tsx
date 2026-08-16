import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  onTogglePassword?: () => void;
};

const Input = ({ label, error, onTogglePassword, secureTextEntry, style, ...props }: InputProps) => {
  const hasToggle = typeof onTogglePassword === 'function';

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.rotulo}>{label}</Text> : null}
      <View style={[styles.envelopeInput, error ? styles.bordaErroInput : null, style]}>
        <TextInput
          {...props}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#9E9E9E"
          style={styles.entrada}
          autoCapitalize="none"
        />
        {hasToggle ? (
          <TouchableOpacity onPress={onTogglePassword} style={styles.botaoIcone} activeOpacity={0.7}>
            <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="#6B7280" />
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? <Text style={styles.textoErro}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  rotulo: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  envelopeInput: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    minHeight: 52,
  },
  entrada: {
    flex: 1,
    color: '#111827',
    fontSize: 16,
    paddingVertical: 12,
  },
  botaoIcone: {
    padding: 6,
  },
  bordaErroInput: {
    borderColor: '#F44336',
  },
  textoErro: {
    marginTop: 6,
    color: '#D32F2F',
    fontSize: 13,
  },
});

export default Input;
