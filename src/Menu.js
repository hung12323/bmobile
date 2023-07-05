import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

//const img={require:'./assets/anhmenu1.png'}
export default function App() {
  return (
    <View style={{ flex: 1, marginTop:60}}>
      <View style={styles.img}>
        <Image 
          source={require('../assets/icons8-menu-101.png')}
        />
        <Text>Menu</Text>
        <Image 
          //style ={{ justifyContent:"flex-end"}}
          source={require('../assets/icons8-shopping-cart-500.png')}
        />
      </View>

      <View>
      <View style={styles.imgthan1}>
        <Image 
        
          source={require('../assets/menu.png')}
        />
        <Image 
         source={require('../assets/menu.png')}
        />
        {/* <Text>Breakfast</Text> */}
       
      </View>

      <View style={styles.imgthan1}>
        <Image 
        
        source={require('../assets/menu.png')}
        />
        <Image 
          source={require('../assets/menu.png')}
        />
        {/* <Text>Breakfast</Text> */}
       
      </View>

      <View style={styles.imgthan1}>
        <Image 
        
        source={require('../assets/menu.png')}
        />
        <Image 
           source={require('../assets/menu.png')}
        />
        {/* <Text>Breakfast</Text> */}
       
      </View>

      <View style={styles.imgthan1}>
        <Image 
        
        source={require('../assets/menu.png')}
        />
        <Image 
         source={require('../assets/menu.png')}
        />
        {/* <Text>Breakfast</Text> */}
       
      </View>

      <View style={styles.imgthan1}>
        <Image 
        
        source={require('../assets/menu.png')}
        />
        <Image 
         source={require('../assets/menu.png')}
        />
        {/* <Text>Breakfast</Text> */}
       
      </View>
      </View>
    </View>
);
}
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
  container:{
      flex:1
  },  
  imgback:{
   
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    backgroundColor:'blue'
  },
  imgthan1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:8,
    marginVertical:4
  }
});