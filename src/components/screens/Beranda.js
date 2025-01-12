// src/screens/Beranda/BerandaScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function BerandaScreen() {
  const sportsImages = [
    { id: "1", source: require("../assets/1p.jpg"), title: "Sepak Bola" },
    { id: "2", source: require("../assets/2p.jpg"), title: "Basket" },
    { id: "3", source: require("../assets/3p.jpg"), title: "Tenis" },
    { id: "4", source: require("../assets/4p.jpeg"), title: "Renang" },
  ];

  const renderSportsItem = ({ item }) => (
    <View style={styles.sportCard}>
      <Image source={item.source} style={styles.sportImage} />
      <Text style={styles.sportTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Selamat Datang di Toko Olahraga Kami</Text>
        <Text style={styles.subtitle}>Temukan perlengkapan terbaik untuk setiap olahraga</Text>
      </View>

      {/* Highlighted Images */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageCarousel}
      >
        <Image
          source={require("../assets/1s.jpg")}
          style={styles.carouselImage}
        />
        <Image
          source={require("../assets/2s.jpg")}
          style={styles.carouselImage}
        />
        <Image
          source={require("../assets/3s.jpg")}
          style={styles.carouselImage}
        />
      </ScrollView>

      {/* Sports List */}
      <Text style={styles.sectionTitle}>Kategori Olahraga</Text>
      <FlatList
        data={sportsImages}
        renderItem={renderSportsItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sportList}
      />

      {/* Store Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Tentang Toko Kami</Text>
        <Text style={styles.descriptionText}>
          Kami menyediakan berbagai perlengkapan olahraga terbaik untuk mendukung performa Anda.
          Mulai dari sepatu, pakaian, hingga alat olahraga dari merek ternama. Dengan kualitas
          terjamin, kami berkomitmen untuk memenuhi kebutuhan Anda dalam berolahraga.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#2464EC",
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#DCE6FF",
    textAlign: "center",
    marginTop: 5,
  },
  imageCarousel: {
    marginTop: 10,
    marginBottom: 20,
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
    marginTop: 10,
  },
  sportList: {
    marginVertical: 10,
  },
  sportCard: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  sportImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  sportTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2464EC",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
    textAlign: "justify",
  },
});
