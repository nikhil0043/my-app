import { View, Text, StyleSheet } from "react-native"

export function EventCard() {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>24</Text>
        <Text style={styles.month}>Sept</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.location}>San Francisco</Text>
        <Text style={styles.venue}>Golden Gate Pavilion</Text>
        <Text style={styles.organizer}>Sonic Waves Productions</Text>
        <Text style={styles.eventName}>Summer Music{"\n"}Festival</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>9+</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B4EFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  dateContainer: {
    marginBottom: 12,
  },
  date: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  month: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  content: {
    position: "relative",
  },
  location: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 4,
  },
  venue: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 12,
  },
  organizer: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 8,
  },
  eventName: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    lineHeight: 32,
  },
  badge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
})

