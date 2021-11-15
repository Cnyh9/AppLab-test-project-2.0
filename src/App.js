import React from 'react'
import {View} from 'react-native-web'
import { Navbar } from './components/Navbar'
import { Todo } from './components/Todo'


 const App = () => {
    return (
        <View>
            <Navbar />
            <Todo />
        </View>
    )
}
export default App