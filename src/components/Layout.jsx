import Header from "./Header";
import Footer from "./Footer";

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const Layout = ({ children }) => {
  return (
    // <div className="main-wrapper">
    <div className="flex flex-col gap-6 md:gap-8 md:pt-6">
      <Header />
      <main className="full-height self-center">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
