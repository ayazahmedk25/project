import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  Button,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>

  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

var yourPicture = require ('./assets/Asset_5.png');
var yourPicture1 = require ('./assets/Asset_6.png');
var yourPicture2 = require ('./assets/Asset_5.png');
var yourPicture3 = require ('./assets/Asset_6.png');
var yourPicture4 = require ('./assets/Asset_5.png');

var yourPicture5 = require ('./assets/Asset_1.png');
var yourPicture6 = require ('./assets/Asset_2.png');
var yourPicture7 = require ('./assets/Asset_3.png');
var yourPicture8 = require ('./assets/Asset_4.png');


var yourPicture9 = require ('./assets/Asset_7.png');



const SECTIONS = [
  {
   title: 'Discover',
    horizontal: true,
    data: [
      {
        key: '1',
   
        uri: yourPicture,
      },
      {
        key: '2',
      
        uri: yourPicture1,
      },

      {
        key: '3',
      
        uri: yourPicture2,
      },
      {
        key: '4',
      
        uri: yourPicture3,
      },
      {
        key: '5',
      
        uri: yourPicture4,
      },
    ],
    
  },
  {
    title: 'Popular Cotegory',
    horizontal: true,
    data: [
      {
        key: '1',
       
        uri: yourPicture5,
      },
      {
        key: '2',
      
        uri: yourPicture6,
      },

      {
        key: '3',
    
        uri: yourPicture7,
      },
      {
        key: '4',
       
        uri: yourPicture8,
      },
    
    ],
  },
  {
    title: 'Useful information',
    data: [
      {
       
       
        uri: yourPicture9,
      },
      {
       
        uri: yourPicture9,
      },

      {

        uri: yourPicture9,
      },
      {
        
        uri: yourPicture9,
      },
      {

        uri: yourPicture9, 
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
  },
});
