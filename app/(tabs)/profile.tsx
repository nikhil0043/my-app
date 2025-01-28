import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://placekitten.com/200/200'}} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Software Developer | Tech Enthusiast | Lifelong Learner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Profile;
