import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function GameCategories({ item, navigation }){



function gameCategoriesItem({ item }){
return (
<View style={styles.game_categories_item}>
<Image
    style={styles.category_icon}
    source={{uri: item.category_icon}}
    />
<Text style={styles.category_label} numberOfLines={1}>{item.category_label}</Text>
</View>
)}

return (
<FlatList
    style={styles.game_categories}
    data={item}
    renderItem={gameCategoriesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default GameCategories;

const styles = StyleSheet.create({
    "category_icon": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "category_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    }
});