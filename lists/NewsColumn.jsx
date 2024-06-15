import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';

class NewsCard extends Component {
  handlePress = () => {
    const { link } = this.props;
    if (link) {
      Linking.openURL(link);
    }
  };

  render() {
    const { title } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.touchable}>
        <View style={styles.container}>
          <View style={styles.contentColumn}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class NewsColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        { id: 1, title: 'Детальный инспекционный осмотр: обеспечьте эффективную и безопасную работу вашего оборудования', link: 'https://dortehlog.ru/инспекционныи-осмотр-обеспечьте-эфф/' },
        { id: 2, title: 'Опыт использования цементобетонных покрытий в КНР', link: 'https://dortehlog.ru/опыт-использования-цементобетонных/' },
        { id: 3, title: 'Приглашаем в команду сервисных механиков из Красноярска', link: 'https://dortehlog.ru/приглашаем-в-команду-сервисных-механ/' },
      ],
    };
  }

  renderNewsCards() {
    return this.state.news.map((item) => (
      <NewsCard key={item.id} title={item.title} link={item.link} />
    ));
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.position}>
        {this.renderNewsCards()}
      </ScrollView>
    );
  }
}

export default NewsColumn;

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
  position: {
    paddingHorizontal: 10, // Adds padding to the sides of the ScrollView
  },
});
