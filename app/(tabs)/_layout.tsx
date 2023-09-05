import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					tabBarIcon: ({ focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={22} color="#22356f" />,
					tabBarLabel: "Products",
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					tabBarIcon: ({ focused }) => <Ionicons name={focused ? "list" : "list-outline"} size={22} color="#22356f" />,
					tabBarLabel: "Products",
				}}
			/>
		</Tabs>
	);
};
