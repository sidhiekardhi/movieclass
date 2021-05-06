import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'

export class AddBuku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            judulBuku:"",
            jumlahHalaman:0,
            namaPenulis:""
        }
    }

    handleAdd(){
        // console.log(this.state)
        axios.post('http://192.168.123.56:8080/buku/addBuku',this.state)
        .then( (response) => {
          // console.log(response)
          alert(response.data)
          this.props.navigation.replace("App")
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Input Judul Buku </Text>
                <TextInput placeholder="Judul Buku" onChangeText={(data)=>{this.setState({judulBuku:data})}}/>
                <Text style={styles.title}> Input Halaman Buku </Text>
                <TextInput placeholder="Halaman Buku" onChangeText={(data)=>{this.setState({jumlahHalaman:parseInt(data)})}}/>
                <Text style={styles.title}> Input Nama Penulis </Text>
                <TextInput placeholder="Nama Penulis" onChangeText={(data)=>{this.setState({namaPenulis:data})}}/>
                <TouchableOpacity style={styles.button} onPress={this.handleAdd.bind(this)}><Text style={styles.title}>Tambahkan Buku</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity>
              
            </View>
        )
    }
}

export default AddBuku

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