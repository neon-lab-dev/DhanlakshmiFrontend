import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import SellerSignUpModal from "./SellerSignUpModal";
import UserSignUpModal from "./UserSignUpModal";

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
      className={`flex flex-col  w-full min-h-full ${
        pathname === "/seller" ? "gap-0" : "md:pt-6"
      }`}
    >
      <Header />
      <main className="self-center w-full min-h-svh">{children}</main>
      <Footer />
      <SellerSignUpModal />
      <UserSignUpModal />
    </div>
  );
};
export default Layout;
