import MobileNavbar from "../navbar/MobileNavbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      {children}
    </>
  );
};

export default Layout;
