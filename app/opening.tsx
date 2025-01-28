import Button from '@/components/ui/Button';
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

const AppOpeningPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          {/* <Image
            source={require('../assets/logo.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          /> */}
        </View>

        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to MyApp</Text>
          <Text style={styles.subText}>
            Discover amazing features and enhance your experience with our platform
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            // onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            // onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.secondaryButtonText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
        <Button variant="destructive" size="md" >
          Cancel
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 15,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#636E72',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#0984E3',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    paddingVertical: 15,
  },
  secondaryButtonText: {
    color: '#0984E3',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AppOpeningPage;
