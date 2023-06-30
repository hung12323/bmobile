import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Slide = ({ imageSource, title, description }) => (
  <View style={styles.slide}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const SlideScreen = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true}>
      <Slide
        imageSource={require('./assets/1_objects.png')}
        title="Browse  Food"
        description="Welcome to our restaurant app! Log in
        and check  out our delicious food."
      />
      <Slide
        imageSource={require('./assets/icons8-delivery-500.png')}
        title="Order Food"
        description="This is the Hungry? Order food in just a few clicks
        and we’ll take care of you.. slide"
      />
      <Slide
      imageSource={require('./assets/noun_Binoculars_1107295.png')}
        title="Slide Make Reservations"
        description="This is the Book a table in advance to avoid
        waiting in line slide"
      />
      <Slide
        imageSource={require('./assets/noun_Calendar_2442157.png')}
        title="Slide Quick Search"
        description="This is Quickly find food items you like
        the most third slide"
      />
      <Slide
       imageSource={require('./assets/noun_mac_2076879.png')}
        title="Apple Pay 5"
        description="This is the We know you’re busy, so you can pay
        with your phone in just one click slide"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EA33A',
  
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'white',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color:'white',
  },
});

export default SlideScreen;