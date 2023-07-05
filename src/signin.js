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
       <TouchableOpacity 
            style={styles.but1}
            onPress={() => Alert.alert('Simple Button pressed')}
            //onPress={() => navigation.navigate("signin")}
          >
            <Text style={styles.but4}>Log In</Text>
          </TouchableOpacity>
          <Text style={{color:'black',fontSize:20,marginBottom:30,}}>
            Or
          </Text>
          <TouchableOpacity 
            style={styles.but6}
            onPress={() => Alert.alert('Simple Button pressed')}
            //onPress={() => navigation.navigate("signin")}
          >
            <Text style={styles.but5}>FaceBook Login</Text>
          </TouchableOpacity>
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
    but4: {
      color: 'white',
      fontSize: 20,
      backgroundColor: "#5EA33A",
    },
    but5: {
      color: 'white',
      fontSize: 20,
      backgroundColor: "#344D91",
    },
    but1: {
      width: 300,
      borderRadius: 30,
      height: 50,
      margin: 20,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#5EA33A",
      marginBottom: 10,
      color: "white",
      marginBottom:40,
    },
    but6: {
      width: 300,
      borderRadius: 30,
      height: 50,
      margin: 20,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#344D91",
      marginBottom: 10,
      color: "white",
      marginBottom:250,
    },
});
