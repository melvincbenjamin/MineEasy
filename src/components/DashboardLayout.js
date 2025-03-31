import Sidebar from "../components/Sidebar";
import { Footer } from "../components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">{children}</div>
    </div>
    <div className="mt-5 bg-dark">
    <Footer />
  </div>
  </div>
  );
};

export default DashboardLayout;
