import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../components/botao/botao';
import Card from '../../components/cartao/cartao';
import Input from '../../components/entrada/entrada';
import styles from './estilos';


const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

type LoginProps = {
  onCreateAccount: () => void;
};

const Login = ({ onCreateAccount }: LoginProps) => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    const nextErrors: Record<string, string> = {};

    if (!email.trim()) nextErrors.email = 'E-mail é obrigatório.';
    else if (!validateEmail(email.trim())) nextErrors.email = 'Digite um e-mail válido.';
    if (!password.trim()) nextErrors.password = 'Senha é obrigatória.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <KeyboardAvoidingView style={styles.tela} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.rolagem, { minHeight: height }]} keyboardShouldPersistTaps="handled">
        <View style={styles.conteiner}>
          <Card style={styles.cartao}>
            <Text style={styles.titulo}>Bem-vindo!</Text>
            <Text style={styles.subtitulo}>Faça login para continuar</Text>

            <Input
              label="E-mail"
              placeholder="seunome@email.com"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
              keyboardType="email-address"
            />
            <Input
              label="Senha"
              placeholder="Sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onTogglePassword={() => setShowPassword((prev) => !prev)}
              error={errors.password}
            />

            <TouchableOpacity style={styles.containerEsqueciSenha} activeOpacity={0.7} onPress={() => {}}>
              <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Button title="Entrar" onPress={handleLogin} loading={loading} />

            <View style={styles.filaSeparadora}>
              <View style={styles.linhaSeparadora} />
              <Text style={styles.textoSeparador}>ou</Text>
              <View style={styles.linhaSeparadora} />
            </View>

            <Button
              title="Entrar com Google"
              onPress={() => {}}
              variant="secondary"
              icon={<FontAwesome name="google" size={18} color="#DB4437" />}
              style={styles.botaoGoogle}
            />

            <View style={styles.rodape}>
              <Text style={styles.textoRodape}>Não tem uma conta? </Text>
              <TouchableOpacity onPress={onCreateAccount} activeOpacity={0.7}>
                <Text style={styles.linkRodape}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
