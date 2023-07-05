import React from 'react';
import { FlatList, StyleSheet, Text, View, Image,ScrollView,StatusBar,SafeAreaView,TouchableOpacity} from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../components/Header';

const DATA = [
 
  { id: '1', title: 'Breakfast',image: require('../assets/Grab-n-Go-Egg-Breakfast-Box2-CMS.png') },
  { id: '2', title: 'Ramen', image: require('../assets/anh8.png') },
  { id: '3', title: 'Sandwiches', image: require('../assets/anh9.png') },
  { id: '4', title: 'Mediterannean', image: require('../assets/Grab-n-Go-Egg-Breakfast-Box2-CMS.png') },
  { id: '5', title: 'Breakfas1', image: require('../assets/Grab-n-Go-Egg-Breakfast-Box2-CMS.png') },
  { id: '6', title: 'Ramen1', image: require('../assets/Grab-n-Go-Egg-Breakfast-Box2-CMS.png') },
  { id: '7', title: 'Ramen2', image: require('../assets/Grab-n-Go-Egg-Breakfast-Box2-CMS.png') },
];



const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.itemImage} />
    <Text style={styles.itemTitle}>{item.title}</Text>
  </View>
);

const MyList = () => {
  return (
   
    <View>
{/* <TouchableOpacity>
<View style={styles.img}>
        <Image 
          source={require('../assets/icons8-menu-101.png')}
          onPress={() => navigation.navigate("Menu")}
        />
       
        <Image 
          //style ={{ justifyContent:"flex-end"}}
          source={require('../assets/icons8-shopping-cart-500.png')}
        />
        
      </View>
</TouchableOpacity> */}
    <Header />
   
      <Text style={{fontSize:25,margin:10}}>
      Popular Categories
        </Text>
        <View>
        <FlatList
     style={{margin:5,}}
      horizontal={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
        </View>
        <View >
          <Text style={{fontSize:25,margin:10}}>Best Deals</Text>
        </View>
       
  
     <ScrollView style={styles.scrollView}>
       
       <Image 
           style ={{ height:200,width:'100%',}}
           source={require('../assets/Group55.png')}
         />
         <Text style={{fontSize:25,marginBottom:30}}>Most Popular</Text>
         <Image 
           style ={{ height:200,width:'100%',marginBottom:30}}
           source={require('../assets/anh22.png')}
         />
         
         <Image 
           style ={{ height:200,width:'100%',marginBottom:30}}
           source={require('../assets/anh10.png')}
         />
         
         <Image 
           style ={{ height:200,width:'100%',marginBottom:30}}
           source={require('../assets/anh4.png')}
         />
            
         <Image 
           style ={{ height:200,width:'100%',marginBottom:30}}
           source={require('../assets/anh4.png')}
         />
         
         
         <Image 
           style ={{ height:200,width:'100%',marginBottom:40}}
           source={require('../assets/Group55.png')}
         />
         
       </ScrollView>
   
    </View>
   

  );
};

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Menu" component={Menu} />
//     </Drawer.Navigator>
//   );
// }
const styles = StyleSheet.create({
  img:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#fff',
    elevation: 4,
    fontSize:18
  },
  item: {
    marginHorizontal: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    margin:5,
  },
  itemTitle: {
    marginTop: 5,
  },
 
  scrollView: {
   height:'100%',
    marginHorizontal: 1,
  },
 
});

export default MyList;