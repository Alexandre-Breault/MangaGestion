import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      black: "#000000",

      // background colors (light)
      background: "$white",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "$white",

      //semantic colors (light)
      blue50: "#EDF5FF",
      // ...
      blue900: "#00254D",
      // ...

      // brand colors
      primaryLight: "$blue200",
      primaryLightHover: "$blue300", // commonly used on hover state
      primaryLightActive: "$blue400", // commonly used on pressed state
      primaryLightContrast: "$blue600", // commonly used for text inside the component
      primary: "$blue600",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "$blue500",

      // ... rest of colors (secondary, success, warning, error, etc)
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
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
