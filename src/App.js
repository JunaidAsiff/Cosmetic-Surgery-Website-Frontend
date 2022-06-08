import HomePage from "./Pages/HomePage/Homepage";
import ContactusPage from "./Pages/ContactusPage/ContactusPage";
import Newspage from "./Pages/Newspage/Newspage";
import Services from "./Pages/ServicesPage/Services";

import { Route, Routes } from "react-router-dom";

import LoginUser from "./components/LoginUser/LoginUser";
import SignupUser from "./components/SignupUser/SignupUser";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";

import MyHeader from "./components/TheHeader/MyHeader";
import MyFooter from "./components/MyFooter/MyFooter";

import Error from "./Pages/Error/Error";






function App() {
  return (
    <div className="App">

      {/* <MyHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
        <Route path="/our-news" element={<Newspage />} />
        <Route path="/our-services/facelift" element={<Services />} />
        <Route path="/signup-user" element={<SignupUser />} />
        <Route path="/sign-me-up" element={<SignupUser />} />
        <Route path="/signin" element={<LoginUser />} />
        <Route path="/appointment" element={<AppointmentForm />} />

      </Routes>
      <MyFooter /> */}



<Error/>




    </div>
  );
}

export default App;





