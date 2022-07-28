import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>first time seeing results horay!</Text>
      <Text>first time seeing results horay!</Text>
      <Text>first time seeing results horay!</Text>
      <Text>first time seeing results horay!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: '',
  },
});
