import Navbar from "./Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "3.75rem" }} className="container">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
