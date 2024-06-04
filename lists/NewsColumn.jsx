import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import styles from './newscolumn.styles'
const logoImage = require('../images/Logo.png')

class NewsCard extends Component {
  handlePress = () => {
    const { link } = this.props;
    if (link) {
      Linking.openURL(link);
    }
  };

  render() {
    const { title, description } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.container}>
          <View style={styles.contentRow}>
            <Image style={styles.image} source={logoImage} />
            <View style={styles.contentColumn}>
              <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
              </View>
            </View>
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
        { id: 2, title: 'Опыт использования цементобетонных покрытий в КНР',  link: 'https://dortehlog.ru/опыт-использования-цементобетонных/' },
        { id: 3, title: 'Приглашаем в команду сервисных механиков из Красноярска',  link: 'https://dortehlog.ru/приглашаем-в-команду-сервисных-механ/' },
      ],
    };
  }

  renderNewsCards() {
    return this.state.news.map((item) => (
      <NewsCard key={item.id} title={item.title} description={item.description} link={item.link} />
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



export default NewsColumn
