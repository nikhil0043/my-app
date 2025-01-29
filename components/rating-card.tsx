import { View, Text, StyleSheet } from "react-native"

export function RatingsCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ratings & Review</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>5.0</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Text key={star} style={styles.star}>
              ⭐
            </Text>
          ))}
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Excellent</Text>
        </View>
      </View>
      <Text style={styles.reviewCount}>Based on 982 Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rating: {
    fontSize: 20,
    fontWeight: "700",
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  badge: {
    backgroundColor: "#F0F0FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: "#6B4EFF",
    fontSize: 12,
    fontWeight: "600",
  },
  reviewCount: {
    fontSize: 14,
    color: "#666",
  },
})

