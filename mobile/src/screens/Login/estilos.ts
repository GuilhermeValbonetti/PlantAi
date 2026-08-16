import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rolagem: {
    flexGrow: 1,
  },
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  cartao: {
    minHeight: 520,
  },
  titulo: {
    fontSize: 28,
    color: '#111827',
    fontWeight: '700',
  },
  subtitulo: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
  },
  containerEsqueciSenha: {
    marginTop: 8,
    width: '100%',
    alignItems: 'flex-end',
  },
  textoEsqueciSenha: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
  },
  filaSeparadora: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  linhaSeparadora: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  textoSeparador: {
    marginHorizontal: 14,
    color: '#6B7280',
    fontSize: 14,
  },
  botaoGoogle: {
    borderColor: '#D1D5DB',
  },
  rodape: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textoRodape: {
    color: '#6B7280',
    fontSize: 14,
  },
  linkRodape: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '700',
  },
});
