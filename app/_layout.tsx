import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" />
            <Stack.Screen name="(tabs)" options={{ title: 'Produtos' }} />
            <Stack.Screen name="product/[id]" options={{ headerShown: true }} />
        </Stack>
    );
}