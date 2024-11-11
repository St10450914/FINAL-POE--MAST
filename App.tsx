import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./Home";
import AddItem from "./addItem";
import SelectDish from "./SelectDish";
import Filter from "./Filter";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ 
        tabBarActiveTintColor: '#e91e63',
       }} 
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarIcon: ( {color}) => <Ionicons name={"home"} size={20} color={color}/>,
          }}
        />
        <Tab.Screen name="Filter" component={Filter} 
          options={{
            tabBarIcon: ( {color}) => <Ionicons name={"filter"} size={20} color={color}/>,
          }}
        />
        <Tab.Screen name="Add Item" component={AddItem}  options={{
            tabBarIcon: ( {color}) => <Ionicons name={"add-circle"} size={24} color={color}/>,
          }} />
        <Tab.Screen name="Select Dish" component={SelectDish}  options={{
            tabBarIcon: ( {color}) => <Ionicons name={"list"} size={24} color={color}/>,
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}