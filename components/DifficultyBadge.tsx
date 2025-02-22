import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "./Themed";
import Colors from "../constants/Colors";

type DifficultyLevel = "BEGINNER" | "INTERMEDIATE" | "EXPERT";

const DIFFICULTY_COLORS = {
  BEGINNER: "#4CAF50", // Green
  INTERMEDIATE: "#FF9800", // Orange
  EXPERT: "#F44336", // Red
};

interface DifficultyBadgeProps {
  level: DifficultyLevel;
}

export default function DifficultyBadge({ level }: DifficultyBadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: DIFFICULTY_COLORS[level] }]}>
      <Text style={styles.text}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
