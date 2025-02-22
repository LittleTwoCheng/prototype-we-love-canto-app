import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function QRScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
        <AntDesign name="qrcode" size={48} color={colors.background} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>
        QR Code Scanner
      </Text>
      <View style={[styles.separator, { backgroundColor: colors.border }]} />
      <Text style={{ color: colors.subtext }}>
        Scan QR codes to discover new phrases
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
    height: 2,
    width: "80%",
  },
  iconContainer: {
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
  },
});
