import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Text } from "./Themed";
import Colors from "../constants/Colors";

interface DiscountBadgeProps {
  discount: string;
}

export default function DiscountBadge({ discount }: DiscountBadgeProps) {
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [-1, 1],
                outputRange: ["-40deg", "0deg"],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.badge}>
        <Text style={styles.text}>{discount}</Text>
        <Text style={styles.offText}>OFF</Text>
      </View>
      <View style={styles.triangle} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  badge: {
    backgroundColor: Colors.light.secondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    transform: [{ rotate: "12deg" }],
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  offText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  triangle: {
    position: "absolute",
    bottom: -8,
    left: "50%",
    marginLeft: -8,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.light.secondary,
    transform: [{ rotate: "190deg" }],
  },
});
