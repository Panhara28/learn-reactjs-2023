import { Navbar } from "../Navbar";

export function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
