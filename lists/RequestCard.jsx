import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RequestCard = ({ item }) => {
  const truncatedDescription = item.description.length > 20
    ? item.description.substring(0, 20) + '...'
    : item.description;

  return (
    <TouchableOpacity onPress={() => { }}>
      <View style={[styles.container, { backgroundColor: item.closeDate ? "#B1B1B1" : "#F4C55C" }]}>
        <View style={styles.contentRow}>
          <View style={styles.contentColumn}>
            <Text style={styles.titleText}>Заявка №{item.id}</Text>
            <Text style={styles.descriptionText}>Описание: {truncatedDescription}</Text>
            <Text style={styles.text}>Услуга: {item.ServiceList.name}</Text>
            <Text style={styles.text}>VIN: {item.Machine.VINNumber}</Text>
          </View>
          <View style={styles.contentColumn2}>
            <Text style={styles.text}>С: {item.openDate}</Text>
            <Text style={styles.text}>По: {item.closeDate ? item.closeDate : 'Активна'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#B1B1B1",
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  contentColumn: {
    flexDirection: "column",
    flex: 1,
    paddingRight: 10,
  },
  contentColumn2: {
    flexDirection: "column",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 3,
  },
});
