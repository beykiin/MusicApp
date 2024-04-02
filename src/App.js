import React, {useState} from "react";
import { SafeAreaView, View, FlatList, Text,  StyleSheet } from "react-native";
import music_data from './music-data.json';
import SongCard from './components/SongCard'
import SearchBar from "./components/SearchBar";


function App () {
  const [list, setList] = useState(music_data);
  const renderSong = ({item})=><SongCard song={item}/> ;
  const renderSeperator = () => <View style={styles.seperator}/>;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;

    })

    setList(filteredList);
  };
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar handleSearch={handleSearch}/>
      </View>
          <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
          />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',

  },
  searchBar:{
    borderBottomColor:'aliceblue',
    borderBottomWidth:1,
    
  },
  seperator:{ 
    borderWidth:1,
    borderColor:'gray'
  }
});

export default App