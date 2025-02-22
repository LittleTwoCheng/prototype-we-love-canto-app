import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Themed";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import Colors from "../constants/Colors";

interface CantoneseCardProps {
  english: string;
  pinyin: string;
  chinese: string;
  audioUrl: string;
}

export default function CantoneseCard({
  english,
  pinyin,
  chinese,
  audioUrl,
}: CantoneseCardProps) {
  const [sound, setSound] = React.useState<Audio.Sound>();
  React.useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
  }, []);

  async function playSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/audios/latte.m4a")
      );

      console.log("Playing sound!");
      setSound(sound);
      await sound.playAsync();
      console.log("Played sound!");
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.card}>
      <Text style={styles.english}>{english}</Text>
      <Text style={styles.pinyin}>{pinyin}</Text>
      <Text style={styles.chinese}>{chinese}</Text>
      <TouchableOpacity style={styles.playButton} onPress={playSound}>
        <AntDesign name="sound" size={24} color={Colors.light.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  english: {
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginBottom: 8,
  },
  pinyin: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  chinese: {
    fontSize: 32,
    marginBottom: 16,
  },
  playButton: {
    alignSelf: "center",
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
  },
});
