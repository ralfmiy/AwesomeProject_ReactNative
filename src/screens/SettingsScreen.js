import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen(props){
    const {navigation} = props;
    const goToSettings = (PageName) => {
        navigation.navigate(PageName)
    }
    return (
        <View>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Text>Estamos en Settings</Text>
            <Button onPress={()=>goToSettings("Home")} title = "Ir a home"/>
        </View>
    );
}
