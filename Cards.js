'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
 
 
import SwipeCards from 'react-native-swipe-cards';
 
let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={this.props.image} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
})
 
let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})
 
const Cards = [
  {name: '1', image: require('./img/bonsai.png')},
  {name: '2', image: require('./img/bottled.png')},
  {name: '3', image: require('./img/bryte.png')},
  {name: '4', image: require('./img/carryfree.png')},
  {name: '5', image: require('./img/choose.png')},
  {name: '6', image: require('./img/daycation.png')},
  {name: '7', image: require('./img/doctalk.png')},
  {name: '8', image: require('./img/durosoft.png')},
  {name: '9', image: require('./img/fetchum.png')},
]
 
const Cards2 = [
  {name: '10', image: require('./img/folkmade.png')},
  {name: '11', image: require('./img/hatch.png')},
  {name: '12', image: require('./img/healthyroots.png')},
  {name: '13', image: require('./img/kulisha.png')},
]
 
export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
 
    let CARD_REFRESH_LIMIT = 3
 
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)
 
        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }
 
    }
 
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})
 
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})