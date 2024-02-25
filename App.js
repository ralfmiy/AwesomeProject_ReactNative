import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import { SafeAreaView } from 'react-native-safe-area-context';
// import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    // <NavigationContainer>
    //   <View style={styles.container}>
    //     {/* <Text>Holaaaaaaaa Mundillo de React Native Im so exciting</Text> */}
    //     <Text>Curso de React Native</Text>
    //     {/* <LoginForm /> */}
    //     <Saludar name="Carlos" />
    //     {/* <Saludar name="Carlos1" lastname={28}/> */}
    //     <Saludar name="Carlos2" />
    //     {/* <Saludar /> */}
    //     <Saludar />
    //   </View></NavigationContainer>

    <NavigationContainer>
      <NavigationDrawer/>
      {/* <NavigationTab/> */}
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
