import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    marginTop: 60,
  },
  greetingBlock: {
    flex: 1,
    paddingRight: 16,
  },
  greeting: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: '#26311c',
    letterSpacing: -0.6,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: '#60704f',
    fontWeight: '500',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c3d3aa',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarText: {
    color: '#2b381f',
    fontWeight: '800',
  },
  sectionSpacing: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2f3b23',
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 10,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    borderWidth: 1,
    borderColor: 'rgba(52, 72, 33, 0.06)',
  },
  summaryGreen: {
    backgroundColor: '#ffffff',
  },
  summaryMint: {
    backgroundColor: '#ffffff',
  },
  summaryRose: {
    backgroundColor: '#ffffff',
  },
  summaryValue: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    color: '#3a5d22',
  },
  summaryLabel: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#5e6c52',
    textAlign: 'center',
  },
  analysisList: {
    gap: 10,
  },
  analysisCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e4ead7',
    shadowColor: '#849970',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 2,
  },
  analysisIcon: {
    width: 54,
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  analysisEmoji: {
    fontSize: 26,
  },
  analysisContent: {
    flex: 1,
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#28351e',
  },
  analysisDiagnosis: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '600',
    color: '#516043',
  },
  analysisMeta: {
    marginTop: 4,
    fontSize: 12,
    color: '#8a977d',
    fontWeight: '500',
  },
  primaryButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#5f9b3a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    shadowColor: '#446a21',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  bottomSpacing: {
    height: 100,
  },
});
