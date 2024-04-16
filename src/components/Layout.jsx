import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    // <div className="main-wrapper">
    <div
      id="main-body"
      className={`flex flex-col md:gap-8 w-full h-full ${
        pathname === "/seller" ? "gap-0" : "gap-6 md:pt-6"
      }`}
    >
      <Header />
      <main className="self-center w-full min-h-svh">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
