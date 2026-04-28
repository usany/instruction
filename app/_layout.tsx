import { useTheme } from "@/contexts/theme-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { SplashScreen } from "@/components/splash-screen";
import { CampusProvider } from "@/contexts/campus-context";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import { useAppLoading } from "@/hooks/use-app-loading";

export const unstable_settings = {
  anchor: "(tabs)",
};

function NavigationThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDark, colors } = useTheme();
  
  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      primary: colors.primary,
    },
  };
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: colors.background,
      card: colors.card,
      text: colors.text,
      border: colors.border,
      primary: colors.primary,
    },
  };

  return (
    <NavigationThemeProvider value={isDark ? customDarkTheme : customLightTheme}>
      {children}
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CampusProvider>
          <NavigationThemeWrapper>
            <AppContent />
            <StatusBar style="auto" />
          </NavigationThemeWrapper>
        </CampusProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

function AppContent() {
  const { isLoading, isReady } = useAppLoading();

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="se/shuttleSeoul" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
