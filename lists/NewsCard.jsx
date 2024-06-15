import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <TouchableOpacity onPress={() => {}} style={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.contentColumn}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsCard;

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 10, // Adds spacing between the cards
  },
  container: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
  },
  contentColumn: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Darker color for better readability
  },
  text: {
    fontSize: 14,
    color: '#666', // Slightly lighter color for description
  },
});
