import MenuApp from "../MenuApp";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div>
      <header>
        <MenuApp />
      </header>
      <main>{children}</main>
    </div>
  );
}
