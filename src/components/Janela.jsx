import React from "react";
import { Text, View } from "react-native";
import Estilo from "./estilo";

export default () =>{
    return (
        <View style={[Estilo.fundo, Estilo.fonte]}>
            <Text>Teste 1</Text>
            <Text>Teste 2</Text>
            <Text>Teste 3</Text>
        </View>
    )
}