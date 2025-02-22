import { StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../../components/Themed";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import MapView, { Marker } from "react-native-maps";
import { useRouter } from "expo-router";
import HeaderTitle from "../../components/HeaderTitle";
import { Path } from "react-native-svg";
import Svg from "react-native-svg";

// Sheung Wan coordinates
const INITIAL_REGION = {
  latitude: 22.2859,
  longitude: 114.1486,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

// Sample POIs in Sheung Wan area
const POINTS_OF_INTEREST = [
  {
    id: "1",
    title: "PMQ",
    description: "Former Police Married Quarters, now a creative hub",
    coordinate: {
      latitude: 22.2847,
      longitude: 114.1498,
    },
  },
  {
    id: "2",
    title: "Man Mo Temple",
    description: "Historic temple built in 1847",
    coordinate: {
      latitude: 22.2846,
      longitude: 114.1502,
    },
  },
  {
    id: "3",
    title: "Tai Ping Shan Street",
    description: "Historic street with traditional shops",
    coordinate: {
      latitude: 22.2852,
      longitude: 114.1483,
    },
  },
];

export default function MapScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          CANTO NETWORK
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
        >
          {POINTS_OF_INTEREST.map((poi) => (
            <Marker
              key={poi.id}
              coordinate={poi.coordinate}
              title={poi.title}
              description={poi.description}
              pinColor={colors.secondary}
              onPress={() => router.push(`/poi/1`)}
            >
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={styles.heart}
              >
                <Path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#FF0066" // Using our secondary color for the heart
                  stroke="#000000"
                  strokeWidth="2"
                />
              </Svg>
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
}

// MapScreen.navigationOptions = {
//   headerTitle: () => <HeaderTitle />,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  mapContainer: {
    width: "100%",
    height: Dimensions.get("window").height * 0.4,
    paddingHorizontal: 10,
  },
  map: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
  },
  heart: {
    marginHorizontal: 4,
  },
});
