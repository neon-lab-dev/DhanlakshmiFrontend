import Header from './Header';
import Footer from './Footer';

/**
 * AppLayout component
 * This component is a layout wrapper for the whole app
 */
const Layout = ({ children }) => {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="full-height">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
