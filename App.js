//  import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Aboutus from "./pages/Aboutus";
// import Login from "./pages/Login.jsx";
// import Contactus from "./pages/Contactus";
// import Awareness from "./pages/Awarness.jsx"; // Note: agar file ka naam Awareness.jsx hai to yahan bhi wahi likho
// import Report from "./pages/Report";
// import Campaign from "./pages/Campaign";
// import Blog from "./components/Blog";
// import CreateBlog from "./components/CreateBlog";
// import Feedback from "./pages/Feedback";
// import Event from "./pages/Event";
// import JoinasVolunteer from "./pages/JoinasVolunteer";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import CreateCampaign from "./pages/CreateCampaign";

// // AWARENESS - EXACT FILE NAMES
// import Air from "./pages/Awareness/Air";
// import Airtype from "./pages/Awareness/Airtype";
// import AirCauses from "./pages/Awareness/AirCauses.jsx";
// import AirEffect from "./pages/Awareness/AirEffect";
// import Water from "./pages/Awareness/Water";
// import Plant from "./pages/Awareness/Plant";
// import Land from "./pages/Awareness/Land";
// import Birds from "./pages/Awareness/Birds.jsx";
// import Animal from "./pages/Awareness/Animal.jsx";
// import Animaldetail from "./pages/Awareness/Animaldetail.jsx";
// import SunLight from "./pages/Awareness/SunLight.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/about-us" element={<Aboutus />} />
//         <Route path="/contact-us" element={<Contactus />} />
//         <Route path="/report" element={<Report />} />
//         <Route path="/campaign" element={<Campaign />} />
//         <Route path="/create-campaign" element={<CreateCampaign />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/event" element={<Event />} />
//         <Route path="/join-as-volunteer" element={<JoinasVolunteer />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/create-blog" element={<CreateBlog />} />

//         {/* AWARENESS */}
//         <Route path="/awareness" element={<Awareness />} />
//         <Route path="/awareness/air" element={<Air />} />
//         <Route path="/awareness/air-type" element={<Airtype />} />
//         <Route path="/awareness/air-causes" element={<AirCauses />} />
//         <Route path="/awareness/air-effect" element={<AirEffect />} />
//         <Route path="/awareness/water" element={<Water />} />
//         <Route path="/awareness/plant" element={<Plant />} />
//         <Route path="/awareness/land" element={<Land />} />
//         <Route path="/awareness/birds" element={<Birds />} />
//         <Route path="/awareness/sunlight" element={<SunLight />} />
//         <Route path="/awareness/animal" element={<Animal />} />
//         <Route path="/awareness/animal-detail" element={<Animaldetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout"; 

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login.jsx";
import Contactus from "./pages/Contactus";
import Awareness from "./pages/Awarness.jsx"; // spelling same
import Report from "./pages/Report";
import MyReports from "./pages/MyReports.jsx"; 
import Campaign from "./pages/Campaign";
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import Feedback from "./pages/Feedback";
import Event from "./pages/Event";
import JoinasVolunteer from "./pages/JoinasVolunteer";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreateCampaign from "./pages/CreateCampaign";

// AWARENESS
import Air from "./pages/Awareness/Air";
import Airtype from "./pages/Awareness/Airtype";
import AirCauses from "./pages/Awareness/AirCauses.jsx";
import AirEffect from "./pages/Awareness/AirEffect";
import Water from "./pages/Awareness/Water";
import Plant from "./pages/Awareness/Plant";
import Land from "./pages/Awareness/Land";
import Birds from "./pages/Awareness/Birds.jsx";
import Animal from "./pages/Awareness/Animal.jsx";
import Animaldetail from "./pages/Awareness/Animaldetail.jsx";
import SunLight from "./pages/Awareness/SunLight.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ In sab pages me Navbar + SecondNavbar + Footer auto aayega */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/report" element={<Report />} />
          <Route path="/my-reports" element={<MyReports />} /> 
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/event" element={<Event />} />
          <Route path="/join-as-volunteer" element={<JoinasVolunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-blog" element={<CreateBlog />} />

          {/* AWARENESS */}
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/awareness/air" element={<Air />} />
          <Route path="/awareness/air-type" element={<Airtype />} />
          <Route path="/awareness/air-causes" element={<AirCauses />} />
          <Route path="/awareness/air-effect" element={<AirEffect />} />
          <Route path="/awareness/water" element={<Water />} />
          <Route path="/awareness/plant" element={<Plant />} />
          <Route path="/awareness/land" element={<Land />} />
          <Route path="/awareness/birds" element={<Birds />} />
          <Route path="/awareness/sunlight" element={<SunLight />} />
          <Route path="/awareness/animal" element={<Animal />} />
          <Route path="/awareness/animal-detail" element={<Animaldetail />} />
        </Route>

        {/* ✅ In pages me Navbar/Footer nahi aayega */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;