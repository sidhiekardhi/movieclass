import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios'

export default class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [
            
            ]
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{
        
        //Make a request for a user with a given ID
        axios.get('http://omdbapi.com/?apikey=e01f82b8&s=kong')
        .then( (response) => {
          response.json()
          let data=response.data.Search;
           console.log(x);
          this.setState({data});
          console.log("auk ahh"+this.state.data);

        })
        .catch(function (error) {
        // handle error
        // console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    

     Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
   
    renderItem = ({ item }) => (
        <View>
            <Text style={styles.title}>{item.Title}</Text>
            {/* <Item title={item.Title} /> */}

        </View>
    )

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.imdbID}
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
      fontSize: 32,
    },
  });
  
