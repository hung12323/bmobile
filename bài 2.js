import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
  
  style={styles.tinyLogo}
  source={require('./assets/1_objects.png')}
/>
<View>
<Text style={styles.box1}>Browse  Food</Text>
</View>
<View>
<Text style={styles.box2}>Welcome to our restaurant app! Log in
and check  out our delicious food.</Text>
</View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#5EA33A',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tinyLogo:{
marginTop:-150,
height:200,
width:200,
    alignItems: 'center',
    justifyContent: 'center',
  },
box1:{
  color:'white',
 marginTop:30,
fontSize:18,
alignItems: 'center',
    justifyContent: 'center',
},
box2:{
  color:'white',
  textAlign: 'center',
  marginTop:20,
  fontSize:18,
  alignItems: 'center',
  
},
});
