import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 20,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ ...styles.sideNavTab }}>
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
              <Text style={{
                color: Colors[colorScheme ?? "light"].text
              }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="send"
        options={{
          title: "Send",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ ...styles.middleNavTab }}>
              <TabBarIcon
                name={focused ? "send" : "send-outline"}
                color={color}
              />
              <Text style={{
                color: Colors[colorScheme ?? "light"].text
              }}>SEND</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ ...styles.sideNavTab }}>
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
            <Text style={{
              color: Colors[colorScheme ?? "light"].text
            }}>SETTINGS</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  sideNavTab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  middleNavTab: {
    position: "absolute",
    bottom: 30,
    borderRadius: 20, 
    backgroundColor: "#007bff", 
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: 100, 
    height: 60,
  },
});
