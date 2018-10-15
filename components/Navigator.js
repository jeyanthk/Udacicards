
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard'
import AddDeck from './AddDeck'
import Quiz from './Quiz'

const Tabs = TabNavigator({
  All: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-card' size={30} color={tintColor} />
    }
  },
  Add: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
})

export const DeckStack = StackNavigator({
  DeckList: {
    screen: Tabs,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: 'purple',
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: 'purple',
      }
    })
  },
  Quiz: {
    screen: Quiz
  }
})
