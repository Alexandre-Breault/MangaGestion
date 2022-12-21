import { useTheme as useNextTheme } from "next-themes";
import { Switch, Text, useTheme } from "@nextui-org/react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
export default function SwitchMode(): JSX.Element {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <Text>{isDark ? <IoMoonSharp /> : <IoSunnySharp />}</Text>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
}
