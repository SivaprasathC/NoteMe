import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Note = ({title, description, id, navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('EditNote',{id})}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>--------------------------------------------------------------</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        minHeight : 100,
        marginBottom: 15,
        backgroundColor: "white",
        padding: 10,
        elevation: 4,
    },
    divider: {
        borderColor: '#1f2842',
        borderWidth: 2,
        marginVertical:  7.
        
    },
    title: {
        color: '#000',
        fontWeight: "600",
        fontSize: 20,
        fontWeight:'bold',
    },
    description : {
        color: 'grey',
        fontSize: 15
    }
})