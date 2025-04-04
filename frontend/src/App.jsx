import './App.css';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SignUpPage from './landing_page/signup/SignUpPage';
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import VarsityPage from './landing_page/virsity/home-page/VarsityPage';
import ModulePage from './landing_page/virsity/module-page/ModulePage';
import CertifiedPage from './landing_page/virsity/certified/CertifiedPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import PageNotFound from './landing_page/pagenotfound/PageNotFound';
import MainPage from './landingKitePage/MainPage';
import { Outlet } from 'react-router-dom';
import Deshboard from './landingKitePage/Deshboard';
import Order from './landingKitePage/Order';
import Holdings from './landingKitePage/Holdings';
import Position from './landingKitePage/Position';
import Bids from './landingKitePage/Bids';
import Fund from './landingKitePage/Fund';
import Baskets from './landingKitePage/OrderComponent/Baskets';
import Sip from './landingKitePage/OrderComponent/Sip';
import Alerts from './landingKitePage/OrderComponent/Alerts';
import Gtt from './landingKitePage/OrderComponent/Gtt';
import Orders from './landingKitePage/OrderComponent/Order';
import All from './landingKitePage/HoldingComponent/All';
import Equity from './landingKitePage/HoldingComponent/Equity';
import AllEquity from './landingKitePage/EquityCompo/AllEquity';
import MTF from './landingKitePage/EquityCompo/MTF';
import KiteOnly from './landingKitePage/EquityCompo/KiteOnly';
import SmallCase from './landingKitePage/EquityCompo/SmallCase';
import MutualFund from './landingKitePage/HoldingComponent/MutualFund';
import SecoundAuth from './landingAuthPage/SecoundAuth/SecoundAuth';
import OtpAuth from './landingAuthPage/OtpAuth/OtpAuth';
import EmailOtpAuth from './landingAuthPage/EmailOtpAuth/EmailOtpAuth';
import Step1 from './landingAuthPage/Step1/Step1';
import Step2 from './landingAuthPage/Step2/Step2';
import Step3 from './landingAuthPage/Step3/Step3';
import Step4 from './landingAuthPage/Step4/Step4';
import AdharOtpAuth from './landingAuthPage/AdharOtpAuth/AdharOtpAuth';
import {Provider} from "react-redux"
import store from './app/store';




function App() {

  function nonlayout() {
    return (
      <>
        <Outlet />
      </>

    )
  }
  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>

    )
  }
  function Layout1() {
    return (
      <>
        
        <Outlet />
        
      </>

    )
  }
  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>

          <Route path='/kite/*' element={<MainPage />} >
          <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard'  element={<Deshboard/>} />
            <Route path='orders/*' element={<Order/>} >
            <Route index element={<Navigate to="order" replace />} />
            <Route path='order' element={<Orders/>}/>
            <Route path='baskets' element={<Baskets/>}/>
            <Route path='sip' element={<Sip/>}/>
            <Route path='alerts' element={<Alerts/>}/>
            <Route path='gtt' element={<Gtt/>}/>
            </Route>
           <Route path='holdings/*' element={<Holdings/>}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path='all' element={<All/>}/>
            <Route path='mutualfund' element={<MutualFund/>}/>
            <Route path='equity/*' element={<Equity/>}>
            <Route index element={<Navigate to="all" replace/>}/>
            <Route path='all' element={<AllEquity/>}/>
            <Route path='mtf' element={<MTF/>}/>
            <Route path='kiteonly' element={<KiteOnly/>}/>
            <Route path='smallcase' element={<SmallCase/>}/>
            </Route>
            <Route path='mutualfund' element={<Sip/>}/>
            
           </Route>
            <Route path='position' element={<Position/>} />
            <Route path='bids' element={<Bids/>} />
            <Route path='funds' element={<Fund/>} />
          </Route>

          <Route element={<Layout/>} >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/price" element={<PricingPage />} />
          <Route exact path="/support" element={<SupportPage />} />
          <Route exact path="/varsity" element={<VarsityPage />} />
          <Route exact path="/varsity/module" element={<ModulePage />} />
          <Route exact path="/varsity/certified" element={<CertifiedPage />} />
          <Route exact path="*" element={<PageNotFound />} />
          </Route>

          <Route element={<Layout1/>}>
          <Route path="/auth/signup" element={<SecoundAuth/>}/>
          <Route path="/auth/comfirmOtp" element={<OtpAuth/>}/>
          <Route path="/auth/comfirmEmailOtp" element={<EmailOtpAuth/>}/>
          <Route path="/auth/step1" element={<Step1/>}/>
          <Route path="/auth/step2" element={<Step2/>}/>
          <Route path="/auth/step3" element={<Step3/>}/>
          <Route path="/auth/step4" element={<Step4/>}/>
          <Route path="/auth/step5" element={<AdharOtpAuth/>}/>
          
          </Route>
        </Routes>

      </Router>

      </Provider>
    </>
  );
}

export default App;
