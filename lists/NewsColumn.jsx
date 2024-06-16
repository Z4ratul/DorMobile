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
        { id: 1, title: 'Холодная фреза Wirtgen W155CFi на ремонте дорог в Красноярске', link: 'https://dortehlog.ru/%d1%85%d0%be%d0%bb%d0%be%d0%b4%d0%bd%d0%b0%d1%8f-%d1%84%d1%80%d0%b5%d0%b7%d0%b0-wirtgen-w155cfi-%d0%bd%d0%b0-%d1%80%d0%b5%d0%bc%d0%be%d0%bd%d1%82%d0%b5-%d0%b4%d0%be%d1%80%d0%be%d0%b3-%d0%b2-%d0%ba/' },
        { id: 2, title: 'Обслуживание техники Wirtgen Group на базе сервисного центра ДОРТЕХНОЛОГИКА в Красноярске', link: 'https://dortehlog.ru/%d0%be%d0%b1%d1%81%d0%bb%d1%83%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d1%82%d0%b5%d1%85%d0%bd%d0%b8%d0%ba%d0%b8-wirtgen-group-%d0%bd%d0%b0-%d0%b1%d0%b0%d0%b7%d0%b5-%d1%81%d0%b5%d1%80%d0%b2%d0%b8/' },
        { id: 3, title: 'Бывший в употреблении асфальтоукладчик Voegele Super 1600-3 L', link: 'https://dortehlog.ru/%d0%b1%d1%8b%d0%b2%d1%88%d0%b8%d0%b9-%d0%b2-%d1%83%d0%bf%d0%be%d1%82%d1%80%d0%b5%d0%b1%d0%bb%d0%b5%d0%bd%d0%b8%d0%b8-%d0%b0%d1%81%d1%84%d0%b0%d0%bb%d1%8c%d1%82%d0%be%d1%83%d0%ba%d0%bb%d0%b0%d0%b4/' },
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
