import { StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";
import { useLocalSearchParams } from "expo-router";
import HeaderTitle from "../../components/HeaderTitle";
import DifficultyBadge from "../../components/DifficultyBadge";
import CantoneseCard from "../../components/CantoneseCard";
import DiscountBadge from "../../components/DiscountBadge";

// Sample data - in real app this would come from an API
const POI_DATA = {
  "1": {
    name: "JAM CAFE",
    discount: "5%",
    challenges: {
      BEGINNER: [
        {
          english: "Latte",
          pinyin: "La Tik",
          chinese: "拿鐵",
          audioUrl: "https://example.com/audio/latte.mp3",
        },
        {
          english: "Americano",
          pinyin: "Mei Sik",
          chinese: "美式",
          audioUrl: "https://example.com/audio/americano.mp3",
        },
        {
          english: "Cold Brew",
          pinyin: "Dung Ga Fe",
          chinese: "凍咖啡",
          audioUrl: "https://example.com/audio/coldbrew.mp3",
        },
      ],
      INTERMEDIATE: [
        {
          english: "Iced Latte",
          pinyin: "Dung La Tik",
          chinese: "凍拿鐵",
          audioUrl: "https://example.com/audio/icedlatte.mp3",
        },
      ],
      EXPERT: [
        {
          english: "Caramel Macchiato",
          pinyin: "Ga La Mel Ma Ki Ya To",
          chinese: "焦糖瑪奇朵",
          audioUrl: "https://example.com/audio/caramel.mp3",
        },
      ],
    },
  },
  // Add more POIs here
};

export default function PoiScreen() {
  const { id } = useLocalSearchParams();
  const poiData = POI_DATA[id as keyof typeof POI_DATA];

  if (!poiData) {
    return (
      <View style={styles.container}>
        <Text>POI not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{poiData.name}</Text>
        <DiscountBadge discount={poiData.discount} />
      </View>

      {(
        Object.keys(poiData.challenges) as Array<
          keyof typeof poiData.challenges
        >
      ).map((level) => (
        <View key={level} style={styles.section}>
          <DifficultyBadge level={level} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardList}
          >
            {poiData.challenges[level].map((challenge, index) => (
              <CantoneseCard key={index} {...challenge} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

PoiScreen.navigationOptions = {
  headerTitle: () => <HeaderTitle />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  cardList: {
    marginTop: 10,
  },
});
