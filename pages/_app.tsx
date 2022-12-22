import { createTheme, NextUIProvider, Theme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SSRProvider } from "react-aria";
import type { AppProps } from "next/app";

const defaultTheme: Theme = {};

const lightTheme = createTheme({
  ...defaultTheme,
  type: "light",
});

const darkTheme = createTheme({
  ...defaultTheme,
  type: "dark",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
