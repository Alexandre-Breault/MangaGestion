import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
export default function SwitchMode(): JSX.Element {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      color='default'
      iconOn={<IoMoonSharp />}
      iconOff={<IoSunnySharp />}
      bordered={true}
    />
  );
}
