import React from "react";
import { StyleSheet, Text,View } from "react-native";

export default ()=>{
    return (
        <View>
            <Text style={terceiroEstilo.bFundo}>Texto1 terceiro</Text>
            <Text>Texto2 terceiro</Text>
            <Text style={[terceiroEstilo.FGrande, terceiroEstilo.bFundo]}>Texto3 terceiro</Text>
        </View>
    )
}

const terceiroEstilo = StyleSheet.create(
    {
        bFundo :{
            backgroundColor: '#ACDB',
            width: 120,
            height: 300,
        },
        FGrande:{
            fontSize: 24,
        }
    }
)
