import React, { Component } from 'react';
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.route.params.id,
      name:this.props.route.params.name,
      email:this.props.route.params.email,
      phone:this.props.route.params.phone,
      address:this.props.route.params.address
    };
  }
  

  handleAdd(){
    // console.log(this.state)
    axios.post(`http://192.168.123.15:8080/user/register/${this.state.id}`,this.state)
    .then( (response) => {
      // console.log(response)
      alert(response.data)
      this.props.navigation.replace("List")
    })
    .catch(function (error) {
    // handle error
     console.log(error);
    })
  }

  render() {
    return (
        <View>
            <Text style={styles.title}> Input Name </Text>
            <TextInput value={this.state.name} placeholder="Name" onChangeText={(data)=>{this.setState({name:data})}}/>
            <Text style={styles.title}> Input Email </Text>
            <TextInput value={this.state.email} placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
            <Text style={styles.title}> Input Phone </Text>
            <TextInput value={this.state.phone} placeholder="Phone" onChangeText={(data)=>{this.setState({phone:data})}}/>
            <Text style={styles.title}> Input Address </Text>
            <TextInput value={this.state.address} placeholder="Address" onChangeText={(data)=>{this.setState({address:data})}}/>
            <TouchableOpacity style={styles.button} onPress={()=>{this.handleAdd()}}><Text style={styles.title}>Tambahkan User</Text></TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
          
        </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
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
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});













// import React, { Component } from 'react';
// import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
// import axios from 'axios'

// class Register extends Component {
//   constructor(props) {
//     super(props);

//       this.state = {
//         id:"",
//         name:"",
//         email:"",
//         phone:"",
//         address:""
//       };
    
//   }

//   componentDidUpdate(){
//     if(this.props.route.params !== undefined){
//       this.setState=({
//         id:this.props.route.params.id,
//         name:this.props.route.params.name,
//         email:this.props.route.params.email,
//         phone:this.props.route.params.phone,
//         address:this.props.route.params.address
//       }); 
//       console.log(this.state)
//     }
//   }


//   handleAdd(){
//     // console.log(this.state)
//     axios.post(`http://192.168.123.15:8080/user/register/${this.state.id}`,this.state)
//     .then( (response) => {
//       // console.log(response)
//       alert(response.data)
//       this.props.navigation.navigate("List")
//     })
//     .catch(function (error) {
//     // handle error
//      console.log(error);
//     })
//   }

//   render() {
//     return (
//         <View>
//             <Text style={styles.title}> Input Name </Text>
//             <TextInput value={this.state.name} placeholder="Name" onChangeText={(data)=>{this.setState({name:data})}}/>
//             <Text style={styles.title}> Input Email </Text>
//             <TextInput value={this.state.email} placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
//             <Text style={styles.title}> Input Phone </Text>
//             <TextInput value={this.state.phone} placeholder="Phone" onChangeText={(data)=>{this.setState({phone:data})}}/>
//             <Text style={styles.title}> Input Address </Text>
//             <TextInput value={this.state.address} placeholder="Address" onChangeText={(data)=>{this.setState({address:data})}}/>
//             <TouchableOpacity style={styles.button} onPress={()=>{this.handleAdd()}}><Text style={styles.title}>Tambahkan User</Text></TouchableOpacity>
//             {/* <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity> */}
          
//         </View>
//     );
//   }
// }

// export default Register;

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 18,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//   },
// });