import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./containers/HomeScreen";
import ProfileScreen from "./containers/ProfileScreen";
import SignInScreen from "./containers/SignInScreen";
import SignUpScreen from "./containers/SignUpScreen";
import SettingsScreen from "./containers/SettingsScreen";
import OutingsScreen from "./containers/OutingsScreen";
import SearchScreen from "./containers/SearchScreen";
import CreateOutingScreen from "./containers/CreateOutingScreen";
import MessageScreen from "./containers/MessageScreen";
import OutingDetailScreen from "./containers/OutingDetailScreen";
import SetUpProfileScreen from "./containers/SetUpProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async (token) => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? null : userToken === null ? ( // We haven't finished checking for the token yet
        // No token found, user isn't signed in

        // NO SIGNIN
        <Stack.Navigator>
          {/* *************************** */}
          {/*           SIGNIN            */}
          {/* *************************** */}
          <Stack.Screen name="SignIn">
            {() => <SignInScreen setToken={setToken} />}
          </Stack.Screen>

          {/* *************************** */}
          {/*           SIGNUP           */}
          {/* *************************** */}
          <Stack.Screen name="SignUp">
            {() => <SignUpScreen setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        // ************************
        // *  User is signed in   *
        // ************************

        // ************************
        // *  Navigation   *
        // ************************
        <Stack.Navigator>
          <Stack.Screen name="Tab" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                }}
              >
                {/* *************************** */}
                {/*           HOME           */}
                {/* *************************** */}
                <Tab.Screen
                  name="Home"
                  options={{
                    tabBarLabel: "Explorez",
                    title: "Explorez",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={"ios-home"} size={size} color={color} />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Home"
                        options={{
                          title: "Home",
                          headerStyle: { backgroundColor: "red" },
                          headerTitleStyle: { color: "white" },
                        }}
                      >
                        {(props) => <HomeScreen {...props} />}
                      </Stack.Screen>
                      {/* *************************** */}
                      {/*       Voir les sorties      */}
                      {/* *************************** */}
                      <Stack.Screen
                        name="Outings"
                        options={{
                          title: "Les sorties",
                        }}
                      >
                        {(props) => <OutingsScreen {...props} />}
                      </Stack.Screen>
                      {/* *************************** */}
                      {/*       Une sortie      */}
                      {/* *************************** */}
                      <Stack.Screen
                        name="OutingDetail"
                        options={{
                          title: "Une sortie",
                        }}
                      >
                        {(props) => <OutingDetailScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                {/* *************************** */}
                {/*           Search            */}
                {/* *************************** */}
                <Tab.Screen
                  name="Search"
                  options={{
                    tabBarLabel: "Recherche",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Search"
                        options={{
                          title: "Recherche",
                          tabBarLabel: "Recherche",
                        }}
                      >
                        {() => <SearchScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                {/* *************************** */}
                {/*         Create outing       */}
                {/* *************************** */}
                <Tab.Screen
                  name="CreateOuting"
                  options={{
                    tabBarLabel: "+",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="CreateOuting">
                        {(props) => <CreateOutingScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                {/* *************************** */}
                {/*         Message       */}
                {/* *************************** */}
                <Tab.Screen
                  name="Message"
                  options={{
                    tabBarLabel: "message",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Message">
                        {() => <MessageScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                {/* *************************** */}
                {/*             Profil          */}
                {/* *************************** */}
                <Tab.Screen
                  name="Profil"
                  options={{
                    tabBarLabel: "Profil",
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons
                        name={"ios-options"}
                        size={size}
                        color={color}
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Profil">
                        {(props) => (
                          <ProfileScreen {...props} setToken={setToken} />
                        )}
                      </Stack.Screen>
                      <Stack.Screen name="SetUpProfile">
                        {(props) => (
                          <SetUpProfileScreen {...props} setToken={setToken} />
                        )}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
