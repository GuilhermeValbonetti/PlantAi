
import { useState, useEffect } from 'react';
import { Pressable, ScrollView, StatusBar as RNStatusBar, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

type SummaryItem = {
  label: string;
  value: string;
  accent: 'green' | 'mint' | 'rose';
};

type AnalysisItem = {
  title: string;
  diagnosis: string;
  time: string;
  confidence: string;
  icon: string;
  background: string;
};

type TabItem = {
  key: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
};

const summaryItems: SummaryItem[] = [
  { label: 'Minhas plantas', value: '12', accent: 'green' },
  { label: 'Análises realizadas', value: '24', accent: 'mint' },
  { label: 'Alertas ativos', value: '5', accent: 'rose' },
];

const analyses: AnalysisItem[] = [
  {
    title: 'Tomate',
    diagnosis: 'Ferrugem comum',
    time: 'Hoje',
    confidence: '92%',
    icon: '🍅',
    background: '#dfe9cf',
  },
  {
    title: 'Alface',
    diagnosis: 'Pulgões',
    time: 'Ontem',
    confidence: '85%',
    icon: '🥬',
    background: '#d7e7c4',
  },
];

const tabs: TabItem[] = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'plants', label: 'Plantas', icon: 'feather' },
  { key: 'scan', label: 'Escanear', icon: 'camera' },
  { key: 'history', label: 'Histórico', icon: 'clock' },
  { key: 'profile', label: 'Perfil', icon: 'user' },
];


export default function App() {
  const [activeTab, setActiveTab] = useState('scan');
  const navigation = useNavigation<any>();
  const [dados, setDados] = useState("jlkjlk")

useEffect(() =>
{
  async function getDados()
{
  const response = await fetch("http://localhost:3001/usuario", {
   method: 'GET',
     headers: {
    'Content-Type': 'application/json',
     }
  })
  
  let atualizaDados = await response.json();
  atualizaDados = atualizaDados.split(" ")[0]
  await setDados(atualizaDados)
  console.log(atualizaDados)
}

getDados()
})

  

  return (
    <View style={[styles.screen, { backgroundColor: '#f8fbf3' }]}>
      <StatusBar style="light" />
      <RNStatusBar barStyle="dark-content" backgroundColor="#f8fbf3" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.greetingBlock}>
              <Text style={styles.greeting}>Olá, {dados}!</Text>
              <Text style={styles.subtitle}>Bem-vindo ao PlantAi</Text>
            </View>

            <View style={styles.headerActions}>
              <Feather name="bell" size={20} color="#2e3a22" />
              <Pressable
                style={styles.avatar}
                accessibilityRole="button"
                onPress={() => navigation.navigate('Perfil')}
              >
                <Text style={styles.avatarText}>J</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.sectionSpacing}>
            <Text style={styles.sectionTitle}>Resumo</Text>
            <View style={styles.summaryRow}>
              {summaryItems.map((item) => (
                <Pressable
                  key={item.label}
                  style={[
                    styles.summaryCard,
                    item.accent === 'green'
                      ? styles.summaryGreen
                      : item.accent === 'mint'
                        ? styles.summaryMint
                        : styles.summaryRose,
                  ]}
                  accessibilityRole="button"
                  onPress={() => {
                    if (item.label === 'Análises realizadas') {
                      navigation.navigate('Historico');
                    }
                  }}
                >
                  <Text style={styles.summaryValue}>{item.value}</Text>
                  <Text style={styles.summaryLabel}>{item.label}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.sectionSpacing}>
            <Text style={styles.sectionTitle}>Últimas análises</Text>
            <View style={styles.analysisList}>
              {analyses.map((analysis) => (
                <Pressable key={analysis.title} style={styles.analysisCard} accessibilityRole="button">
                  <View style={[styles.analysisIcon, { backgroundColor: analysis.background }]}>
                    <Text style={styles.analysisEmoji}>{analysis.icon}</Text>
                  </View>
                  <View style={styles.analysisContent}>
                    <Text style={styles.analysisTitle}>{analysis.title}</Text>
                    <Text style={styles.analysisDiagnosis}>{analysis.diagnosis}</Text>
                    <Text style={styles.analysisMeta}>
                      {analysis.time} • {analysis.confidence}
                    </Text>
                  </View>
                  <Feather name="chevron-right" size={20} color="#70835f" />
                </Pressable>
              ))}
            </View>
          </View>

          <Pressable
            style={styles.primaryButton}
            accessibilityRole="button"
            onPress={() => navigation.navigate('Analise')}
          >
            <Feather name="plus" size={18} color="#fff" />
            <Text style={styles.primaryButtonText}>Nova análise</Text>
          </Pressable>

          <View style={styles.bottomSpacing} />
        </ScrollView>

      </SafeAreaView>
    </View>
  );
}

