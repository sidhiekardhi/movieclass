import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'

export default class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: []
        };

    }

    componentDidMount(){
      this.getData();
    }

    getData =()=>{
        //Make a request for a user with a given ID
        axios.get('http://192.168.0.106:8080/buku/')
        .then( (response) => {
          console.log(response.data)
          let data=response.data;   
          this.setState({data:data});
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    

    //  Item = ({ title }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.title}>{title}</Text>
    //     </View>
    //   );
      
    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"red"}}>
            <Text style={styles.title}>Judul Buku : {item.judulBuku}</Text>
            <Text style={styles.title}>Jumlah Halaman : {item.jumlahHalaman}</Text>
            <Text style={styles.title}>Nama Penulis : {item.namaPenulis  }</Text>
        </View>
    )

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <TouchableOpacity style={styles.button}><Text style={styles.title}>Tambahkan Buku</Text></TouchableOpacity>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
              
            </SafeAreaView>
          );
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
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });