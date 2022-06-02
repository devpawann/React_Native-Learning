import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import MealsList from "./screens/MealsList";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                {/*Giving initial route name is optional if you have ordered the screen*/}
                <Stack.Navigator initialRouteName="Meals Categories Screen" screenOptions={{
                    headerStyle: {backgroundColor: "#351401"},
                    headerTintColor: "white",
                    contentStyle: {backgroundColor: "#421c06"}
                }}>
                    <Stack.Screen
                        name="Meals Categories Screen"
                        component={CategoriesScreen}
                        options={{
                            title: "All Categories",

                        }}/>
                    <Stack.Screen
                        name="Meals List Screen"
                        component={MealsList}
                        // Options Should return options obj but it also receives navigation and route params too
                        // This option seems fine but we have alternative which is more easy and readable

                        // options={({navigation,route})=>{
                        //     const title=route.params.mealId;
                        //     return {
                        //         title: title
                        //     }
                        // }}
                    />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title:"Meal Detail"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
