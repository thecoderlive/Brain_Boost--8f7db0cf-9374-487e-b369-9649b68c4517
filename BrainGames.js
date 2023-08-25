import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './brain_games_data'
import GameCategories from './GameCategories'
import GameLevels from './GameLevels'
import GameList from './GameList'

function BrainGames({ navigation, route }){ 
const url = (api.brain_games ?? "brain_games/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state



async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.brain_games} showsVerticalScrollIndicator={false}>
<GameCategories item={'game_categories' in item ? item.game_categories: item} navigation={navigation}/>
<GameLevels item={'game_levels' in item ? item.game_levels: item} navigation={navigation}/>
<GameList item={'game_list' in item ? item.game_list: item} navigation={navigation}/>
</ScrollView>
)}

export default BrainGames;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center"
    }
});