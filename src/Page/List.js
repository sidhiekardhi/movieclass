import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios'
import { Picker } from '@react-native-community/picker';

export class List extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            type:"name",
            value:""
        };

    }

    componentDidMount(){
        this.getData();
    }

    getDataCari =()=>{
        // console.log(this.state)
        //Make a request for a user with a given ID
        axios.get(`http://192.168.123.15:8080/user/searchby/${this.state.type}/${this.state.value}`)
        .then( (response) => {
          // console.log(response.data")
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    getData =()=>{
        //Make a request for a user with a given ID
        axios.get(`http://192.168.123.15:8080/user/`)
        .then( (response) => {
          // console.log(response.data")
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{Alert.alert(`Anda yakin ingin mengubah data ${item.name}`,
            'Saya sih tidak...',[
              {text: 'TIDAK', onPress: () => console.log('NO Pressed'), style: 'cancel'},
              {text: 'YA', onPress: () =>  this.props.navigation.replace("Register",item)},
            ])}} >
            <View style = {{borderWidth:5, borderColor:"red"}}>
                <Text style={styles.title}>Name : {item.name}</Text>
                <Text style={styles.title}>Email : {item.email}</Text>
                <Text style={styles.title}>Phone : {item.phone}</Text>
                <Text style={styles.title}>Address : {item.address}</Text>

                {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UpdateBuku",item)}} style={styles.button}><Text style={styles.title}>Update Buku</Text></TouchableOpacity>
                <TouchableOpacity  onPress={()=>{Alert.alert('Anda yakin?',
                  'Saya sih tidak...',[
                    {text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                    {text: 'YA', onPress: () => this.deleteData(item.id)},
                  ])}} 
                  style={styles.button}>
                    <Text style={styles.title}>Delete Buku</Text>
                </TouchableOpacity> */}

            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <TouchableOpacity onPress={()=>{this.props.navigation.replace("Register",{id:"",name:"",email:"",phone:"",address:""})}} style={styles.button}><Text style={styles.title}>Tambahkan User</Text></TouchableOpacity>
              <Text style={styles.title}>Search By : </Text>
              <Picker
                     selectedValue={this.state.type}
                     style={{ height: 50, width: 150 }}
                     onValueChange={(itemValue) => {this.setState({type:itemValue})}}
                >
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="Email" value="email" />
                    <Picker.Item label="Phone" value="phone" />
                    <Picker.Item label="Address" value="address" />
                </Picker>
              <TextInput TextInput placeholder="Cari User" onChangeText={(data)=>{this.setState({value:data})}}/>
              <TouchableOpacity onPress={()=>{this.getDataCari()}} style={styles.button}><Text style={styles.title}>Cari</Text></TouchableOpacity>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
              
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    button: {
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });

export default List





























// import React, { Component } from 'react'
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
// import axios from 'axios'
// import { Picker } from '@react-native-community/picker';

// export class List extends Component {

//     constructor(props) {
//         super(props);
//         // Don't call this.setState() here!
//         this.state = { 
//             data: [],
//             type:"name",
//             value:""
//         };

//     }

//     componentDidMount(){
//         this.getData();
//     }

//     getDataCari =()=>{
//         // console.log(this.state)
//         //Make a request for a user with a given ID
//         axios.get(`http://192.168.123.15:8080/user/searchby/${this.state.type}/${this.state.value}`)
//         .then( (response) => {
//           // console.log(response.data")
//           let data=response.data;   
//           this.setState({data:data}); 
//         })
//         .catch(function (error) {
//         // handle error
//          console.log(error);
//         })
//     }

//     getData =()=>{
//         //Make a request for a user with a given ID
//         axios.get(`http://192.168.123.15:8080/user/`)
//         .then( (response) => {
//           // console.log(response.data")
//           let data=response.data;   
//           this.setState({data:data}); 
//         })
//         .catch(function (error) {
//         // handle error
//          console.log(error);
//         })
//     }

//     renderItem = ({ item }) => (
//         <TouchableOpacity onPress={()=>{Alert.alert(`Anda yakin ingin mengubah data ${item.name}`,
//             'Saya sih tidak...',[
//               {text: 'TIDAK', onPress: () => console.log('NO Pressed'), style: 'cancel'},
//               {text: 'YA', onPress: () =>  this.props.navigation.navigate("Register",item)},
//             ])}} >
//             <View style = {{borderWidth:5, borderColor:"red"}}>
//                 <Text style={styles.title}>Name : {item.name}</Text>
//                 <Text style={styles.title}>Email : {item.email}</Text>
//                 <Text style={styles.title}>Phone : {item.phone}</Text>
//                 <Text style={styles.title}>Address : {item.address}</Text>

//                 {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UpdateBuku",item)}} style={styles.button}><Text style={styles.title}>Update Buku</Text></TouchableOpacity>
//                 <TouchableOpacity  onPress={()=>{Alert.alert('Anda yakin?',
//                   'Saya sih tidak...',[
//                     {text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//                     {text: 'YA', onPress: () => this.deleteData(item.id)},
//                   ])}} 
//                   style={styles.button}>
//                     <Text style={styles.title}>Delete Buku</Text>
//                 </TouchableOpacity> */}

//             </View>
//         </TouchableOpacity>
//     )

//     render() {
//         return (
//             <SafeAreaView style={styles.container}>
//               <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Register",{id:"",name:"",email:"",phone:"",address:""})}} style={styles.button}><Text style={styles.title}>Tambahkan User</Text></TouchableOpacity>
//               <Text style={styles.title}>Search By : </Text>
//               <Picker
//                      selectedValue={this.state.type}
//                      style={{ height: 50, width: 150 }}
//                      onValueChange={(itemValue) => {this.setState({type:itemValue})}}
//                 >
//                     <Picker.Item label="Name" value="name" />
//                     <Picker.Item label="Email" value="email" />
//                     <Picker.Item label="Phone" value="phone" />
//                     <Picker.Item label="Address" value="address" />
//                 </Picker>
//               <TextInput TextInput placeholder="Cari User" onChangeText={(data)=>{this.setState({value:data})}}/>
//               <TouchableOpacity onPress={()=>{this.getDataCari()}} style={styles.button}><Text style={styles.title}>Cari</Text></TouchableOpacity>
//               <FlatList
//                 data={this.state.data}
//                 renderItem={this.renderItem}
//                 keyExtractor={item => item.id}
//               />
              
//             </SafeAreaView>
//         )
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//       backgroundColor: '#f9c2ff',
//       padding: 20,
//       marginVertical: 8,
//       marginHorizontal: 16,
//     },
//     title: {
//       fontSize: 18,
//     },
//     button: {
//       margin:10,
//       alignItems: "center",
//       backgroundColor: "#DDDDDD",
//       padding: 10,
//     },
//   });

// export default List
