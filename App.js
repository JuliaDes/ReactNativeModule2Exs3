import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.rover}
        source={require('./assets/rover.jpg')}>
      </Image>
      <Text style = {styles.text}>  Le Rover Opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  rover: {
    borderColor:'black',
    borderWidth: 15,
    flex:.75,
   width: '75%'

  },
  text : {
    flex : .25,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: 20
    

    // flexDirection : 'column'
  }
});