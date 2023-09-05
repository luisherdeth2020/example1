import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        // screenOptions: Este prop es utilizado para definir las opciones generales de las pestañas, que se aplicarán a todas las pestañas en el componente <Tabs>.
        <Tabs screenOptions={{
            headerShown: false,
            // headerTitle: 'Pepe',
            tabBarActiveTintColor: '#22356f',
            headerTitleAlign: "center",
            tabBarLabelStyle: {
                fontSize: 12,
            },
            tabBarStyle: {
                backgroundColor: '#68E0E1'
            }
        }} >
            {/* define una de las pestañas utilizando <Tabs.Screen> */}
            <Tabs.Screen
                name="products"
                // options: Define las opciones específicas de esta pestaña.
                options={{
                    tabBarIcon: ({ focused }) => (<Ionicons name={focused ? 'basket' : 'basket-outline'} size={22} color="#22356f" />),
                    tabBarLabel: "Products"
                }} />
            <Tabs.Screen
                name="categories"
                options={{
                    tabBarIcon: ({ focused }) => (<Ionicons name={focused ? 'ios-list' : 'ios-list-outline'} size={22} color="#22356f" />),
                    tabBarLabel: "Categories"
                }} />
        </Tabs>
    )
}