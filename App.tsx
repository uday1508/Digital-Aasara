import { View, Text, SafeAreaView } from 'react-native'
import {Provider} from 'react-redux';
import Mystore from './src/redux/Mystore';
import React from 'react'
import Register from './src/screens/Login/Register';
import MasterNavigation from './src/navigation/MasterNavigation';

const App = () => {
  return (
    <Provider store={Mystore}>
         <MasterNavigation/>
    </Provider>
  )
}

export default App