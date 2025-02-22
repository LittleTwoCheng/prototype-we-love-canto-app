import { StyleSheet, View, ScrollView, Animated } from "react-native";
import { Text } from "../../components/Themed";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import HeaderTitle from "../../components/HeaderTitle";
import AchievementHeart from "../../components/AchievementHeart";

import Svg, { Path } from "react-native-svg";

// Sample achievements data
const ACHIEVEMENTS = [
  { id: 1, isUnlocked: true, nextToUnlocked: false },
  { id: 2, isUnlocked: true, nextToUnlocked: false },
  { id: 3, isUnlocked: true, nextToUnlocked: false },
  { id: 4, isUnlocked: false, nextToUnlocked: false },
  { id: 5, isUnlocked: false, nextToUnlocked: false },
  { id: 6, isUnlocked: false, nextToUnlocked: true },
  { id: 7, isUnlocked: false, nextToUnlocked: false },
  { id: 8, isUnlocked: false, nextToUnlocked: false },
  { id: 9, isUnlocked: false, nextToUnlocked: false },
];

export default function AchievementsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const renderPath = () => {
    const pathSegments = [];
    const totalAchievements = ACHIEVEMENTS.length;
    const achievementsPerRow = 3;
    const rows = Math.ceil(totalAchievements / achievementsPerRow);

    for (let row = 0; row < rows; row++) {
      const isLastRow = row === rows - 1;
      const isEvenRow = row % 2 === 1;
      const rowAchievements = ACHIEVEMENTS.slice(
        row * achievementsPerRow,
        (row + 1) * achievementsPerRow
      );

      pathSegments.push(
        <View
          key={`row-${row}`}
          style={[
            styles.rowContainer,
            {
              flexDirection: isEvenRow ? "row" : "row-reverse",
            },
          ]}
        >
          {/* Path line */}
          <View
            style={[
              styles.pathLine,
              {
                backgroundColor: colors.border,
              },
            ]}
          />

          {/* Achievement hearts */}
          <View style={styles.heartsContainer}>
            {rowAchievements.map((achievement, index) => (
              <View
                key={achievement.id}
                style={[
                  styles.heartWrapper,
                  {
                    alignSelf: isEvenRow ? "flex-start" : "flex-end",
                  },
                ]}
              >
                <AchievementHeart
                  isUnlocked={achievement.isUnlocked}
                  nextToUnlocked={achievement.nextToUnlocked}
                  size={48}
                />
              </View>
            ))}
          </View>

          {/* Vertical connector to next row */}
          {!isLastRow && (
            <View
              style={[
                styles.verticalConnector,
                {
                  backgroundColor: colors.border,
                  alignSelf: isEvenRow ? "flex-end" : "flex-start",
                },
              ]}
            />
          )}
        </View>
      );
    }

    return pathSegments;
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.title, { color: colors.text }]}>ACHIEVEMENTS</Text>
      <View style={styles.modelSection}>
        <Text style={[styles.modelTitle, { color: colors.text }]}>
          BEGINNER LEVEL
        </Text>
        <View style={styles.modelVisual}>
          <View style={styles.modelRow}>
            <AchievementHeart isUnlocked={true} size={60} />
            <View
              style={[
                styles.modelConnector,
                { backgroundColor: colors.border },
              ]}
            />
            <AchievementHeart isUnlocked={false} size={60} />
            <View
              style={[
                styles.modelConnector,
                { backgroundColor: colors.border },
              ]}
            />
            <AchievementHeart isUnlocked={false} size={60} />
          </View>
        </View>
      </View>
      <Text style={[styles.modelTitle, { color: colors.text }]}>
        INTERMEDIATE LEVEL
      </Text>
      <View style={styles.pathContainer}>{renderPath()}</View>
    </ScrollView>
  );
}

AchievementsScreen.navigationOptions = {
  headerTitle: () => <HeaderTitle />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  pathContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowContainer: {
    width: "100%",
    height: 100,
    position: "relative",
  },
  pathLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  heartsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 10,
    bottom: 0,
  },
  heartWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verticalConnector: {
    position: "absolute",
    bottom: -50,
    width: 4,
    height: 100,
    borderRadius: 4,
  },
  modelSection: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  modelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  modelVisual: {
    alignItems: "center",
  },
  modelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modelConnector: {
    width: 40,
    height: 4,
    marginHorizontal: 10,
  },
});
