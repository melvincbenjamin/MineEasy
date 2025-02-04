import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './pages/AboutSection';
import Blog from './pages/Blog';
import Default from './pages/Default';
import WalletDashboard from './pages/WalletDashboard';
import Mining from './pages/Mining';
import Service from './pages/Service';
import Settings from './pages/Settings';
import Deposit from "./pages/Deposit"; // Create this page
import Referral from "./pages/Referral"; // Create this page
import Sidebar from './components/Sidebar'; // Import Sidebar

// Layout for dashboard with Sidebar
const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar /> {/* Sidebar always visible in dashboard routes */}
      <div className="flex-grow-1 p-3">
        {children} {/* This will render the nested dashboard components */}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/default" element={<Default />} />
            <Route path="/wallet/dashboard" element={<WalletDashboard />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/about-section" element={<AboutSection />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            {/* Dashboard with Sidebar */}
            <Route 
              path="/dashboard/*" 
              element={
                <DashboardLayout>
                  <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/referral" element={<Referral />} />
                    <Route path="settings" element={<Settings />} />
                    {/* Add other dashboard-related routes here */}
                  </Routes>
                </DashboardLayout>
              } 
            />
          </Routes>
        </div>

        <div className="mt-5 bg-dark">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
