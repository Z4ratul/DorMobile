import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MachineCard = ({ item }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("Machine", {
      VINNumber: item.VINNumber,
    });
  };

  const placeholderImage = 'https://fashionhot.club/uploads/posts/2022-12/1670311516_61-fashionhot-club-p-termobele-skins-64.jpg';

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.contentRow}>
          {item.image ? (
            <Image
              style={styles.image}
              source={{ uri: `http://dortechs.ru/${item.image}` }}
            />
          ) : (
            <Image
              style={styles.image}
              source={{ uri: placeholderImage }}
            />
          )}
          <View style={styles.contentColumn}>
            <Text style={styles.title}>VIN-номер: {item.VINNumber}</Text>
            <Text style={styles.subtitle}>Модель: {item.modelName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MachineCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 330,
    backgroundColor: "#F4C55C",
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
  },
});
