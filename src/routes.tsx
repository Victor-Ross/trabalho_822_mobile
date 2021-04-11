import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import StudentPerfil from './pages/StudentPerfil/StudentPerfil';
import StudentGroups from './pages/StudentGroups/StudentGroups';
import StudentReview from './pages/StudentReview/StudentReview';
import AcceptStudent from './pages/AcceptStudent/AcceptStudent';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="/" component={StudentPerfil} />
        <Screen name="/groups" component={StudentGroups} />
        <Screen name="/reviews" component={StudentReview} />
        <Screen name="/acceptStudent" component={AcceptStudent} />
      </Navigator>
    </NavigationContainer>
  );
}