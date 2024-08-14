import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home';
import Main from './Layout/Main';
import PrincipalDashboard from './Pages/PrincipalDashboard/PrincipalDashboard';
import TeacherDashboard from './Pages/TeacherDashboard/TeacherDashboard';
import StudentDashboard from './Pages/StudentDashboard/StudentDashboard';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ClassroomManagement from './Pages/ClassroomManagement/ClassroomManagement';
import Timetable from './Pages/Timetable/Timetable';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import AuthProvider from './providers/AuthProvider';
import ContactUs from './Pages/ContactUs/ContactUs';
import Dashboard from './Layout/Dashboard';
import DashboardHome from './Pages/DashboardHome/DashboardHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/principal-dashboard",
        element: <PrincipalDashboard />,
      },
      {
        path: "/teacher-dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "/student-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/classroom-management",
        element: <ClassroomManagement />,
      },
      {
        path: "/timetable",
        element: <Timetable />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
