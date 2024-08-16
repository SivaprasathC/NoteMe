import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import AddNote from './screens/AddNote';
import Edit from './screens/Edit';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <StatusBar style="light" backgroundColor="#000000" />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ 
          title: "NoteMe", 
          headerTitleAlign: 'center', 
          headerStyle: { backgroundColor: '#1f2842' },
          headerTitleStyle: {color: '#4ec2b6',fontWeight:'bold'}
        }} />
        <Stack.Screen name="AddNote" component={AddNote} 
        options={{ 
          title: "Add Note",  
          headerTitleAlign: 'center', 
          headerStyle: { backgroundColor: '#1f2842' },
          headerTitleStyle: {color: '#4ec2b6',fontWeight:'bold'}
        }}        
        />
        <Stack.Screen name="EditNote" component={Edit} 
        options={{ 
          title: "Edit Note",  
          headerTitleAlign: 'center', 
          headerStyle: { backgroundColor: '#1f2842' },
          headerTitleStyle: {color: '#4ec2b6',fontWeight:'bold'}
        }}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;