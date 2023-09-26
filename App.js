import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DATA from './DATA';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import Row from './components/Row';

export default function App() {

  /*function renderRow({item}) {
    return <Text>{item.lastname}</Text>
  }*/

 /* const renderRow = ({item}) => {
        <Text>{item.lastname}</Text>
  }*/

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data = {DATA}
      renderItem={({item}) => (
       <Row person={item} />
      )}
      keyExtractor={person => person.id}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 20,
  },
});
