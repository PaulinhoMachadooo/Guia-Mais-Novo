import { Stack } from "expo-router";
import React from "react";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="list"  options={{
                headerShown: false,
                title: ""
            }}/>
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
