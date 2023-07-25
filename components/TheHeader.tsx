import Link from "next/link";
import { NAV_ITEMS, Navigation } from "./Navigation";

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={NAV_ITEMS}/>
    </header>
  );
};

export { TheHeader };