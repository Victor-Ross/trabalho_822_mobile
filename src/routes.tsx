import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home';
import Produto from './pages/Produto';
import Cadastro from './pages/Cadastro';
import BemVindo from './pages/BemVindo';
import Produtos from './pages/Produtos';

import { RouteParamList } from './RouteParamList';

const { Navigator, Screen } = createStackNavigator<RouteParamList>(); 

export default function Routes() {


  return(
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home} />
        <Screen name="Produto" component={Produto} />
        <Screen name="Produtos" component={Produtos} />
        <Screen name="Cadastro" component={Cadastro} />
        <Screen name="BemVindo" component={BemVindo} />
      </Navigator>
    </NavigationContainer>
  );
}