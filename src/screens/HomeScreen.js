import React from "react";
import { View, Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(props){
    console.log(props);
    const {navigation} = props;
    const goToPage = () => {
        navigation.navigate("Settings")
    }
    return (
        <View>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Button onPress={goToPage} title = "Configuracion"/>
        </View>
    );
}