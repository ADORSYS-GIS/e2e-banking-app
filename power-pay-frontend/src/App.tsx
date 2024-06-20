import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import OTPForm from './components/OTPForm';
import SuccessPage from './components/SuccessPage';
import Home from './components/Home';
import AccountBalance from './components/AccountBalance';
import PaymentOptions from './components/paymentoption';
import PinInput_For_Balance from './components/PinInput_Balance';
import PinInput from './components/pinInput';
import RecipientInfo from './components/RecipientInfo';
import SendMoneyConfirmation from './components/SendMoneyConfirmation';
import UserLogin from './components/UserLogin';
import QRScannerComponent from './components/scan_rq';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<AccountBalance />} />
        <Route path="/payment" element={<PaymentOptions />} />
        <Route path="/pin_balance" element={<PinInput_For_Balance />} />
        <Route path="/pin_send" element={<PinInput />} />
        <Route path="/send_money_confirmation" element={<SendMoneyConfirmation onSuccess={function (successMessage: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/recipient_info" element={<RecipientInfo />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/otp" element={<OTPForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/QR_scan" element={<QRScannerComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
