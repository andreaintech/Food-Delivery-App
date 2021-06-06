import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/screens/home'
import { OrderDeliveryScreen } from './src/screens/orders'
import { RestaurantScreen } from './src/screens/restaurants'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName='HomeScreen'
			>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="OrderDeliveryScreen" component={OrderDeliveryScreen} />
				<Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}


export default App;
