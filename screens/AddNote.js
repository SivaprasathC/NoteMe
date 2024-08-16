import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'


const AddNote = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function getRandomNumber() {
        const random1 = Math.random()
        const random2 = Math.random()
        const random=(random1+random2)*Math.random()
        return random;
      }
        const addNote = async () => {
        const data = await AsyncStorage.getItem('data');
        if (data == null) {
            const json = {
                notes: [
                    {
                        id: getRandomNumber(),
                        title: title,
                        description: description
                    }
                ]
            }
            const string = JSON.stringify(json);
            await AsyncStorage.setItem('data',string);
        }
        else {
            const string = await AsyncStorage.getItem('data');
            const json = JSON.parse(string);
            const listOfNotes = json.notes;
            if(title === '' ||description === '')
                {
                Alert.alert(
                    'Error',
                    'Title or Description cannot be empty!',
                    [
                        {
                            text:'OK',
                            style:'cancel'
                        }
                    ]
                           )
                }
            else
            {
            listOfNotes.push({id: getRandomNumber(), title : title, description : description})
            json.notes = listOfNotes;
            const stringData = JSON.stringify(json);
            await AsyncStorage.setItem('data',stringData)
        }
        navigation.navigate('Home')
        
        }}

    return (
        <SafeAreaView style={styles.body}>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder='Add a title'
            />
            <TextInput
                editable
                multiline
                numberOfLines={5}
                onChangeText={setDescription}
                value={description}
                style={styles.input}
                placeholder='Add a description'
            />
            <TouchableOpacity onPress={() => addNote()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        ADD
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AddNote

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: 'relative',
        backgroundColor: '#EEEEE'
    },
    input: {
        color: '#000',
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        fontSize: 17
    },
    button: {
        backgroundColor: '#1f2842',
        marginVertical: 25,
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#4ec2b6',
        fontWeight:'bold'
    }
})