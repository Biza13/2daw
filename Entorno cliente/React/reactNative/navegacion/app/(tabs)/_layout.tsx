import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}>

      <Tabs.Screen name="index" options={{ 
            title: 'Home', 
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ), }} />
      <Tabs.Screen name="detalles" options={{ 
            title: 'Detalle',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
            ), }} />
      <Tabs.Screen name="productos" options={{ 
            title: 'Productos',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'cart' : 'cart'} color={color} size={24}/>
            ), }} />

    </Tabs>
  );
}