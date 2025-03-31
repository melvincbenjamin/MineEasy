import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Service from './pages/Service';
import Default from './pages/Default';
import Mining from "./pages/Mining";
import AboutSection from "./pages/AboutSection";


import Dashboard from './pages/Dashboard';
import WalletDashboard from './pages/WalletDashboard';
import MiningDevice from './pages/MiningDevice';
import Withdraw from './pages/Withdraw';
import Settings from './pages/Settings';
import CustomerSupport from './pages/CustomerSupport';
import Deposit from './pages/Deposit';
import Referral from './pages/Referral';
import PurchaseViewAll from './pages/PurchaseViewAll';
import LoginIssues from "./pages/LoginIssues";
import TradingSetup from "./pages/TradingSetup";
import TechnicalProblems from "./pages/TechnicalProblem";
import SecurityPrivacy from "./pages/SecurityPrivacy";
import BillingPayments from './pages/TechnicalProblem';
import DepositLog from "./pages/DepositLog";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        {/* Routes with Navbar */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/service" element={<MainLayout><Service /></MainLayout>} />
        <Route path="/default" element={<MainLayout><Default /></MainLayout>} />
        <Route path="/mining" element={<MainLayout><Mining /></MainLayout>} />
        <Route path="/about-section" element={<MainLayout><AboutSection /></MainLayout>} />



        {/* Dashboard Routes (No Navbar, Only Sidebar) */}
        <Route path="/dashboard/*" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/wallet/dashboard" element={<DashboardLayout><WalletDashboard /></DashboardLayout>} />
        <Route path="/miningdevice" element={<DashboardLayout><MiningDevice /></DashboardLayout>} />
        <Route path="/withdraw" element={<DashboardLayout><Withdraw /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/support" element={<DashboardLayout><CustomerSupport /></DashboardLayout>} />
        <Route path="/depositusdwallet" element={<DashboardLayout><Deposit /></DashboardLayout>} />
        <Route path="/deposit" element={<DashboardLayout><PurchaseViewAll /></DashboardLayout>} />
        <Route path="/depositlog" element={<DashboardLayout><DepositLog /></DashboardLayout>} />
        <Route path="/login-issues" element={<DashboardLayout><LoginIssues /></DashboardLayout>} />
        <Route path="/mining-setup" element={<DashboardLayout><TradingSetup /></DashboardLayout>} />
        <Route path="/technical-problems" element={<DashboardLayout><TechnicalProblems /></DashboardLayout>} />
        <Route path="/security-privacy" element={<DashboardLayout><SecurityPrivacy /></DashboardLayout>} />
        <Route path="/billing-payments" element={<DashboardLayout><BillingPayments /></DashboardLayout>} />
        <Route path="/referral" element={<DashboardLayout><Referral /></DashboardLayout>} />


      </Routes>
    </Router>
    </div>
  );
}

export default App;
