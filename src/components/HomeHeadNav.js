import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { Ionicons } from '@expo/vector-icons';
// import AppStack from '../globals/navigation/AuthStack';
const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={20} color="black" style={styles.myIcon} 
            // onPress={() => { navigation.navigate('AuthStack') }}
          />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Foodie</Text>
                <MaterialCommunityIcons name="food-outline" size={26} color="black" style={styles.myIcon} />
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('userprofile') }}>
                <FontAwesome5 name="user-circle" size={26} color="black" style={styles.myIcon} />
            </TouchableOpacity>
            
        </View>
        
        
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myIcon: {
        color: colors.text1,
    },
    mytext: {
        color: colors.text1,
        fontSize: 24,
    },
})