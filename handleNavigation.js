import React from 'react';
import  {useNavigate}  from 'react-router-dom';



const handleNavigation = (navigate, route) => {
  if (!navigate) return;
  switch(route) {
    case "dashboard":
      navigate("/dashboard");
      break;
    case "projects":
      navigate("/projects");
      break;
    case "calendar":
      navigate("/calendar");
      break;
    case "settings":
      navigate("/settings");
      break;
    default:
      console.log("Invalid Route");
      break;
    case 'web-development':
      console.log('Navigating to Web Development');
      break;
    case 'performance-innovation':
      console.log('Navigating to Performance Innovation');
      break;
    case 'packet-tracer':
      console.log('Navigating to Packet Tracer');
      break;
    case 'packet-tracer-project':
      console.log('Navigating to Packet Tracer Project');
      break;
    case 'web-development-project':
      console.log('Navigating to Web Development Project');
      break;
      console.log('Opening new project modal');
      break;
  }
};

export default handleNavigation;