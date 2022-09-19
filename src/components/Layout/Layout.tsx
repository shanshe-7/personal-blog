import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { Children } from "@types/generalReact";

function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
