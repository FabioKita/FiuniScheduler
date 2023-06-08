import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TestCard from "src/components/card/test-card";

const CardList = ({
    color,
    entries = [],
    style
})=>{
    const renderItem = ({item})=>{
        return <TestCard key={item.id} color={color}/>
    }

    return <FlatList 
        data={entries} 
        style={[styles.List].concat(style)} 
        renderItem={renderItem} 
        ItemSeparatorComponent={Gap}
    />
}

const Gap = ()=>{
    return <View style={{marginTop:16}}/>
}

const styles = StyleSheet.create({
    List:{
        padding:16
    }
})

export default CardList;