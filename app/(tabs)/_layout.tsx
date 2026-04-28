import { Tabs } from "expo-router";
import React from "react";

import { DockNavigation } from "@/app/components/DockNavigation";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={() => <DockNavigation />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="se/index"
        options={{
          href: "/se",
        }}
      />
      <Tabs.Screen
        name="se/busOne"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="se/busTwo"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="se/busThree"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="se/shuttle"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gl/index"
        options={{
          href: "/gl",
        }}
      />
      <Tabs.Screen
        name="gl/busTo"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gl/busFrom"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gl/commute"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gl/shuttle"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gw/index"
        options={{
          href: "/gw",
        }}
      />
      <Tabs.Screen
        name="gw/busN"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="gw/busJ"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
