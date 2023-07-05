import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image,TouchableOpacity } from 'react-native';

export default function landingscr({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
  
  style={styles.tinyLogo}
  source={require('../assets/icons8-restaurant-menu-102.png')}
/>
<View>
<Text style={styles.box1}>Browse  Food</Text>
</View>
<View>
<Text style={styles.box2}>Welcome to our restaurant app! Log in
and check  out our delicious food.</Text>

<View style={styles.but1}>
<Button
        title="Log In"
        onPress={() => navigation.navigate("signin")}
        color='#5EA33A'
      />
    </View>
    <View style={styles.but2}>
    <Button
        title="Sig Up"
        onPress={() => navigation.navigate("signupscr")}
        color='black'
      />
    </View>
</View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tinyLogo:{
marginTop:-150,
height:150,
width:150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:50,

  },
box1:{
  color:'#5EA33A',
 marginTop:30,
fontSize:18,
alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
},
box2:{
  color:'black',
  textAlign: 'center',
  marginTop:20,
  fontSize:18,
  alignItems: 'center',
  marginBottom:50,
  
},
but1:{
 
    borderRadius: 30,
    
margin:20,
    justifyContent: "center",
    
    backgroundColor: "#5EA33A",
   marginBottom:10,
    
   
},
but2:{
  
margin:20,
    justifyContent: "center",
    
  
   marginBottom:150,
    
    borderWidth:1
},

});
