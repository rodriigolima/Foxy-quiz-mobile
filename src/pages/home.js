import React from 'react';
import FabButton from '../components/FabButton';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  Text,
  BackHandler,
  StatusBar,
} from 'react-native';
import {styles} from '../components/styles';


import date from '../../date';

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(date);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setList(date);
    } else {
      setList(
        date.filter(
          item =>
            item.pergunta.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),
      );
    }
  }, [searchText]);

  () => {
    let newList = [...date];

    newList.sort((a, b) =>
      a.pergunta > b.pergunta ? 1 : b.pergunta > a.pergunta ? -1 : 0,
    );

    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder= "Search_"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={t => setSearchText(t)}
        />
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text
            style={{
              color: item.state ? 'green' : 'red',
              flexDirection: 'row',
              marginLeft: 30,
              marginRight: 30,
              borderBottomWidth: 1,
              borderBottomColor: '#444',
              paddingTop: 15,
              paddingBottom: 15,
              fontSize: 20,
            }}>
            {' '}
            {item.pergunta}
          </Text>
        )}
      />
      <FabButton />
    </SafeAreaView>
  );
}

export default Home;
