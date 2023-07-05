import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
//import { Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image 
                    source={require('../assets/icons8-menu-101.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    source={require('../assets/icons8-shopping-cart-500.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;