import { Automation } from "../pages/Expertise/Automation";
import { CloudSolutions } from "../pages/Expertise/CloudSolutions";
import { DataScience } from "../pages/Expertise/DataScience";
import { MachineLearning } from "../pages/Expertise/MachineLearning";
import { WebDevelopment } from "../pages/Expertise/WebDevelopment";
import MobileAppDevelopment from "../pages/Expertise/MobileAppDevelopment"
import AIPowerdChatbots from "../pages/Expertise/AIPowerdChatbots";
import CompuerVision from "../pages/Expertise/CompuerVision";
import { Consultancy } from "../pages/Expertise/Consultancy";
import LegalContent from "../pages/Expertise/LegalContent";


const ExpertiseRoutes = [
  {
    path: "/expertise/machine-learning",
    element: <MachineLearning />,
  },
  {
    path: "/expertise/data-science",
    element: <DataScience />,
  },
  {
    path: "/expertise/automation",
    element: <Automation/>,
  },
  {
    path: "/expertise/cloud-solutions",
    element: <CloudSolutions/>,
  },
  {
    path: "/expertise/software-development",
    element: <WebDevelopment/>,
  },
  {
    path: "/expertise/web-mobile-app-development",
    element: <MobileAppDevelopment/>,
  },
  {
    path: "/expertise/ai-chatbots",
    element: <AIPowerdChatbots/>,
  },
  {
    path: "/expertise/computer-vision",
    element: <CompuerVision/>,
  },
  {
    path: "/expertise/consultancy",
    element: <Consultancy/>,
  },
  {
    path: "/expertise/terms-and-conditions",
    element: <LegalContent/>,
  },

];

export default ExpertiseRoutes;
