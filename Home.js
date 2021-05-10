import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/Page/List';
import Register from './src/Page/Register';

const Stack = createStackNavigator();

export class Home extends Component {
    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator> 
                        <Stack.Screen 
                        name="List" 
                        component={List}/>
                        <Stack.Screen 
                        name="Register" 
                        component={Register}/>
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default Home










// import React, { Component } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import List from './src/Page/List';
// import Register from './src/Page/Register';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createMaterialBottomTabNavigator();

// export class Home extends Component {
//     render() {
//         return (
//                 <NavigationContainer>
//                     <Stack.Navigator> 
//                         <Stack.Screen 
//                         name="List" 
//                         component={List}
//                         options={{
//                             tabBarLabel: 'List',
//                             tabBarIcon: ({ color }) => (
//                               <MaterialCommunityIcons name="home" color={color} size={26} />
//                             ),
//                         }}/>
//                         <Stack.Screen 
//                         name="Register" 
//                         component={Register}
//                         options={{
//                           tabBarLabel: 'Register',
//                           tabBarIcon: ({ color }) => (
//                             <MaterialCommunityIcons name="account" color={color} size={26} />
//                           ),
//                         }}
//                         />
//                     </Stack.Navigator>
//                 </NavigationContainer>
//         )
//     }
// }

// export default Home
