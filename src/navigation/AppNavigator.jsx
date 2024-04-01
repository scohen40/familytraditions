import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Make sure you have expo installed or install Ionicons separately

// Import your screens
import HomeScreen from '../screens/HomeScreen.jsx';
import AddRecipeScreen from '../screens/CreateRecipeScreen.jsx';
import FamilyMembersScreen from '../screens/FamilyMemberScreen.jsx';
// import UserProfileAndSettingsScreen from '../screens/UserProfileAndSettingsScreen.jsx';
// import NotificationsScreen from '../screens/NotificationsScreen.jsx';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'AddRecipe') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'FamilyMembers') {
              iconName = focused ? 'ios-people' : 'ios-people-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddRecipe" component={AddRecipeScreen} />
        <Tab.Screen name="FamilyMembers" component={FamilyMembersScreen} />
        {/* <Tab.Screen name="Profile" component={UserProfileAndSettingsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
