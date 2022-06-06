import * as React from 'react';
import {StatusBar, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpense from './screens/AllExpense';
import {GlobalStyles} from './constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './component/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function RecentAndAllBottomStack() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: ({tintColor}) => {
          return (
            <IconButton
              iconName="plus"
              color={tintColor}
              size={24}
              onPress={() => {
                navigation.navigate('ManageExpenseScreen');
              }}
            />
          );
        },
      })}>
      <BottomTabs.Screen
        name="Recent"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpense}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="calendar" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={GlobalStyles.colors.primary500}
      />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              options={{headerShown: false}}
              name="ExpenseOverview"
              component={RecentAndAllBottomStack}
            />
            <Stack.Screen
              name="ManageExpenseScreen"
              component={ManageExpense}
              options={{presentation: 'modal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
