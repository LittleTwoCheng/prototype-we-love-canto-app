import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";

interface AchievementHeartProps {
  isUnlocked: boolean;
  nextToUnlocked?: boolean;
  size?: number;
}

export default function AchievementHeart({
  isUnlocked,
  nextToUnlocked,
  size = 40,
}: AchievementHeartProps) {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (isUnlocked) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [isUnlocked]);

  React.useEffect(() => {
    if (nextToUnlocked) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [nextToUnlocked]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: pulseAnim }],
          opacity: isUnlocked ? 1 : 0.6,
        },
      ]}
    >
      <View
        style={[
          styles.glow,
          {
            width: size * 1.5,
            height: size * 1.5,
            backgroundColor: isUnlocked
              ? "rgba(255, 0, 102, 0.2)"
              : nextToUnlocked
              ? "rgba(255, 0, 102, 0.26)"
              : "rgba(64, 48, 54, 0.5)",
          },
        ]}
      >
        <Svg width={size} height={size} viewBox="0 0 24 24">
          <Path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={Colors.light.secondary}
            stroke="#000000"
            strokeWidth="1"
          />
        </Svg>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  glow: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
