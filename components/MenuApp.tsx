import { Navbar, Text, useTheme } from "@nextui-org/react";
import SwitchMode from "./SwitchMode";

export default function MenuApp(): JSX.Element {
  const { theme, isDark } = useTheme();
  return (
    <Navbar isBordered={isDark} variant={"floating"} shouldHideOnScroll>
      <Navbar.Brand css={{ mr: "$4" }}>
        <Text b color='inherit' css={{ mr: "$11" }} hideIn='xs'>
          Menu
        </Text>
        <Navbar.Content hideIn='xs'>
          <Navbar.Link isActive href='/'>
            Home
          </Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <SwitchMode />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
