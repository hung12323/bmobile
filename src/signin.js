import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,Image,TouchableOpacity,TextInput, } from 'react-native';

export default function signin() {
  return (
    <View style={styles.container}>
     
<View>
<Text style={styles.box1}>Sig In</Text>
</View>
<TextInput
        style={styles.input}

        placeholder="Email or phone Number"
        keyboardType="numeric"
      />
      <TextInput
      style={styles.input1}
        placeholder="PassWord"
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
 
      input:{
        height: 50,
        width:'90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
        marginBottom:10,
      
      },
      box1:{
        color:'#5EA33A',
      marginRight:300,
      fontSize:25,
      marginTop:50,
         
          marginBottom:10,
      },
      input1:{
        height: 50,
        width:'90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:25,
       marginBottom:10,
      
      },
      but1:{
        
    margin:20,
        justifyContent: "center",
      borderRadius:10,
        width:'70%',
        backgroundColor: "#5EA33A",
       marginBottom:400,

    },
});
