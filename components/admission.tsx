import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function AdmissionCard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🎫</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>General Admission</Text>
          <Text style={styles.description}>
            Perks: Food trucks, merchandise stands, and chill-out zones.
          </Text>
        </View>
      </View>
      <Text style={styles.price}>$25</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F0FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B4EFF',
  },
});
