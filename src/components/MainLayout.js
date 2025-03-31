import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">{children}</div>
      <div className="mt-5 bg-dark">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
