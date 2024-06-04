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
            <Text>Заявка №{item.id}</Text>
            <Text>Описание: {truncatedDescription}</Text>
            <Text>Услуга: {item.ServiceList.name}</Text>
            <Text>VIN: {item.Machine.VINNumber}</Text>
          </View>
          <View style={styles.contentColumn2}>
            <Text>C: {item.openDate}</Text>
            <Text>По: {item.closeDate ? item.closeDate : 'Активна'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    height: 100, // Увеличил высоту для размещения дополнительного текста
    width: 320,
    backgroundColor: "#B1B1B1",
    borderRadius: 15,
    marginVertical: 5, // Добавил отступ между карточками
  },
  contentRow: {
    flexDirection: "row",
    width: 350,
    alignContent: "stretch"
  },
  contentColumn: {
    flexDirection: "column",
    marginTop: 2,
    marginLeft: 10,
    width: 190
  },
  contentColumn2: {
    flexDirection: "column",
    marginTop: 2,
    marginLeft: 40,
    width: 110
  },
  title: {
    marginLeft: 10
  },
  titleStyle: {
    fontSize: 17,
  },
  text: {
    marginLeft: 5,
    marginTop: 3
  },
  textStyle: {
    fontSize: 13,
  },
  dateStyle: {
    fontSize: 14,
    marginLeft: 100
  },
});
