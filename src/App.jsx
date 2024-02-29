import React from "react";
import { Text, View } from "react-native";

import Terceiro from "./components/Terceiro";
import Segundo from "./components/Segundo";
import Janela from "./components/Janela";

export default () => {
    return (
        <View>
            <Terceiro/>
            <Segundo/>
            <Janela/>
            <Text>Testando app</Text>
        </View>
    )
}