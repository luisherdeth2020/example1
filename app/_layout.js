import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
// import Home from './home'

export default function Layout() {
	return (
		<Stack
			screenOptions={{
				// headerTitle: 'Home',
				// headerShown: false
				headerTitleAlign: "center",
				headerStyle: {
					// backgroundColor: "#68E0E1",
					backgroundColor: "#544B81",
				},
				headerTintColor: "#fff",
				// headerBackVisible: false,
				headerRight: () => (
					<Link href={"/settings"} asChild>
						<Ionicons name="ios-settings-outline" size={24} color="white" />
					</Link>
				),
			}}
		></Stack>
	);
}
