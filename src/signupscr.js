import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image,TouchableOpacity,TextInput, } from 'react-native';

export default function signupscr({navigation}) {
  return (
    <View style={styles.container}>
     
<View>
<Text style={styles.box1}>Create new account</Text>
</View>
<TextInput
        style={styles.input}
        
       
        placeholder="Full Name"
        keyboardType="numeric"
      />
      <TextInput
       style={styles.input1}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input2}
        placeholder="Email Address"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input3}
        placeholder="Password"
        keyboardType="numeric"
      />
        <View style={styles.but1}>
<Button
        title="Log In"
        onPress={() => Alert.alert('Simple Button pressed')}
        color='#5EA33A'
      />
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
  box1:{
    color:'#5EA33A',
marginRight:150,
  fontSize:25,
  marginTop:50,
     
      marginBottom:10,
  },
 
      input:{
        height: 50,
        width:'80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        
      
      },
      input1:{
        height: 50,
        width:'80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        
      
      },
      input2:{
        height: 50,
        width:'80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        
      
      },
      input3:{
        height: 50,
        width:'80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        
      
      },
      but1:{
        
        margin:20,
            justifyContent: "center",
          borderRadius:10,
            width:'50%',
            backgroundColor: "#5EA33A",
           marginBottom:300,
    
        },
});
