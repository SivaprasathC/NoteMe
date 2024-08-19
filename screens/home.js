import { View, Text, StyleSheet, TouchableOpacity,  FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Note from './components/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({navigation}) {
  const [listOfNotes, setListOfNotes] = useState('')
  const getData = async () => {
    const string = await AsyncStorage.getItem('data');
    const json = JSON.parse(string);
    setListOfNotes(json.notes);
    
  }

  useEffect(() => {
    getData()
  });

  return (
    <View style={styles.body}>
        {
          (listOfNotes.length == 0)? 
          <View style={{height: 400, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'#000',fontSize:20}}>Add your notes first</Text>
          </View>
           :
           <FlatList
            data={listOfNotes}
            renderItem={({item}) => <Note id={item.id}  navigation={navigation} description={item.description} title={item.title} key={item => item.id}/>}

           />
        }
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('AddNote') }}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.delButtonContainer}>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: '#EEEEE'
  },
  addButton: {
    backgroundColor: '#1f2842',
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25.0,

  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,

  },
  buttonText: {
    color: '#4ec2b6',
    fontSize:40,
    fontWeight:'bold' 
  },
})
