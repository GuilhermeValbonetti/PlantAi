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
import { Feather } from '@expo/vector-icons';
import Button from '../../components/button/button';
import Card from '../../components/card/card';
import Input from '../../components/input/input';
import styles from './styles';

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

type CadastroProps = {
  onBack: () => void;
  onSignIn: () => void;
};

const Cadastro = ({ onBack, onSignIn }: CadastroProps) => {
  const { height } = useWindowDimensions();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleCreateAccount = () => {
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = 'Nome é obrigatório.';
    if (!email.trim()) nextErrors.email = 'E-mail é obrigatório.';
    else if (!validateEmail(email.trim())) nextErrors.email = 'Digite um e-mail válido.';
    if (!password.trim()) nextErrors.password = 'Senha é obrigatória.';
    if (!confirmPassword.trim()) nextErrors.confirmPassword = 'Confirme a senha.';
    if (password && confirmPassword && password !== confirmPassword) nextErrors.confirmPassword = 'As senhas não coincidem.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 1400);
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.scroll, { minHeight: height }]} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.7}>
            <Feather name="arrow-left" size={22} color="#111827" />
          </TouchableOpacity>

          <Card style={styles.card}>
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>Preencha seus dados</Text>

            <Input label="Nome" placeholder="Seu nome" value={name} onChangeText={setName} error={errors.name} />
            <Input label="E-mail" placeholder="seunome@email.com" value={email} onChangeText={setEmail} error={errors.email} keyboardType="email-address" />
            <Input
              label="Senha"
              placeholder="Sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onTogglePassword={() => setShowPassword((prev) => !prev)}
              error={errors.password}
            />
            <Input
              label="Confirmar senha"
              placeholder="Repita sua senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword((prev) => !prev)}
              error={errors.confirmPassword}
            />

            <Button title="Criar conta" onPress={handleCreateAccount} loading={loading} />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={onSignIn} activeOpacity={0.7}>
                <Text style={styles.footerLink}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
