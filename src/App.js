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
import Deposit from "./pages/Deposit"; 
import Referral from "./pages/Referral";
import Sidebar from './components/Sidebar'; // Import Sidebar
import Settings from './pages/Settings';
import CustomerSupport from './pages/CustomerSupport';
import Withdraw from './pages/Withdraw';
import MiningDevice from './pages/MiningDevice';
//import PopUpWithdraw from './pages/PopUpWithdraw';
import DepositUSDWallet from './pages/DepositUsdWallet';
import LoginIssues from './pages/LoginIssues';
import TradingSetup from './pages/TradingSetup';
import BillingPayments from './pages/BillingPayments';
import TechnicalProblem from './pages/TechnicalProblem';
import SecurityPrivacy from './pages/SecurityPrivacy';

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
            <Route path="/miningdevice" element={<MiningDevice />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/support" element={<CustomerSupport />} />
            <Route path="/login-issues" element={<LoginIssues />} />
            <Route path="/mining-setup" element={<TradingSetup />} />
            <Route path="/billing-payments" element={<BillingPayments />} />
            <Route path="/technical-problems" element={<TechnicalProblem />} />
            <Route path="/security-privacy" element={<SecurityPrivacy />} />
            <Route path="/depositusdwallet" element={<DepositUSDWallet />} />


            
            {/* Dashboard with Sidebar */}
            <Route 
              path="/dashboard/*" 
              element={
                <DashboardLayout>
                  <Routes>
                    <Route path="" element={<Dashboard />} />
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
