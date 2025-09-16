import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Aboutus from "./pages/Aboutus";
import OurHiringProcess from "./pages/careers/OurHiringProcess";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/Contact";
import CandidateRegistrationForm from "./pages/careers/CandidateRegisterForm";
import NotFound from "./components/NotFound";
import HRPortalLogin from "./pages/Admin/HRPortalLogin";
import CandidateDisplay from "./pages/careers/CandidateDisplay";
import ContactInfo from "./pages/Admin/ContactInfo";
import Unauthorized from "./pages/Admin/Unauthorized";
import AdminLogin from "./pages/Admin/AdminLogin";
import CustomerDetails from "./pages/Admin/CustomerDetails";
import ExpertiseRoutes from "./Routers/ExpertiseRoutes";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/careers/hiring-process",
    element: <OurHiringProcess />,
  },
  {
    path: "/careers/opening",
    element: <Careers />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/CandidateRegistrationForm",
    element: <CandidateRegistrationForm />,
  },
  {
    path: "/candidates",
    element: <CandidateDisplay />,
  },
  {
    path: "/JobBoard",
    element: <CandidateRegistrationForm />,
  },
  {
    path:"/hr/login",
    element: <HRPortalLogin />,
  },
  {
    path:"/admin/login",
    element: <AdminLogin />,
  },
  {
    path:"/admin/Customer",
    element: <CustomerDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/unauthorized",
    element: < Unauthorized/>,
  },
  ...ExpertiseRoutes, 
]);

export default MainRouter;
