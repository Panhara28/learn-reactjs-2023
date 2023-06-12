import { Navbar } from "../Navbar";
import PopupAds from "../PopupAds";

export function Layout(props) {
  return (
    <>
      <Navbar />
      <PopupAds />

      {props.children}
    </>
  );
}
