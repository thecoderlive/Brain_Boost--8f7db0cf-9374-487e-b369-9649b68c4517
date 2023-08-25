import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function GameList({ item, navigation }){

const onPressStartGame = () => {}

function gameListItem({ item }){
return (
<View style={styles.game_list_item}>
<Image
    style={styles.game_icon}
    source={{uri: item.game_icon}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.game_label} numberOfLines={1}>{item.game_label}</Text>
<TouchableOpacity  onPress={onPressStartGame}>
    <View style={styles.start_game}>{'Start Game'}</View>
</TouchableOpacity>
</View>
</View>
)}

return (
<FlatList
    style={styles.game_list}
    data={item}
    renderItem={gameListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default GameList;

const styles = StyleSheet.create({
    "game_icon": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "game_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "start_game": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});