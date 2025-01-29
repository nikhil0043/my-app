import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '@/components/ui/Button';
import { useColorScheme } from '@/hooks/useColorScheme.web';

export default function Profile() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [faceId, setFaceId] = useState(true);
  const colorScheme = useColorScheme() ?? 'light';

  const ListItem = ({ title, rightElement, onPress, style }: { title: string; rightElement: JSX.Element; onPress?: () => void; style?: object }) => (
    <TouchableOpacity
      style={[styles.listItem, style]}
      onPress={onPress}
      disabled={!onPress}
    >
      <Text style={styles.listItemText}>{title}</Text>
      {rightElement}
    </TouchableOpacity>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: colorScheme === 'light' ? '#fff' : '#000' }
    ]}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarBackground} />
            <Image
              source={{ uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SpqeJlKrcdPzsncGeZrgedTlWJcXHz.png" }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Coffeestories</Text>
          <Text style={styles.email}>mark.brook@icloud.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* Inventories Section */}
        <View style={styles.section}>
          <SectionTitle title="Inventories" />
          <View style={styles.card}>
            <ListItem
              title="My stores"
              rightElement={
                <View style={styles.row}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>2</Text>
                  </View>
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
              }
              onPress={() => { }}
            />
            <ListItem
              title="Support"
              rightElement={<AntDesign name="arrowright" size={24} color="black" />}
              onPress={() => { }}
            />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <SectionTitle title="Preferences" />
          <View style={styles.card}>
            <ListItem
              title="Push notifications"
              rightElement={
                <Switch
                  value={pushNotifications}
                  onValueChange={setPushNotifications}
                  trackColor={{ false: '#D1D1D6', true: '#2E7D32' }}
                  ios_backgroundColor="#D1D1D6"
                />
              }
            />
            <ListItem
              title="Face ID"
              rightElement={
                <Switch
                  value={faceId}
                  onValueChange={setFaceId}
                  trackColor={{ false: '#D1D1D6', true: '#2E7D32' }}
                  ios_backgroundColor="#D1D1D6"
                />
              }
            />
            <ListItem
              title="PIN Code"
              rightElement={<AntDesign name="arrowright" size={24} color="black" />}
              onPress={() => { }}
            />
          </View>
        </View>

        {/* Logout Button */}
        <Button style={styles.logoutButton} variant='destructive'>Logout</Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 40,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  avatarBackground: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  editButtonText: {
    fontSize: 14,
    color: '#666666',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  listItemText: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: '500',
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    borderRadius: 4,
  },
  logoutText: {
    color: '#DC2626',
    fontSize: 16,
  },
});