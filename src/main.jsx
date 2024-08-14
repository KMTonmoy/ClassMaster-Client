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
import Admit from './Pages/Admit/Admit';
import CreateClassroom from './Pages/CreateClassroom/CreateClassroom';
import ManageStudent from './Pages/ManageStudents/Managestudent';
import ManageTeachers from './Pages/ManageTeachers/ManageTeachers';
import About from './Pages/About/About';
import Classmates from './Pages/ClassMates/Classmates';
import MyStudents from './Pages/MyStudents/MyStudents';


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
        path: "/about",
        element: <About />,
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
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />,
          },
          {
            path: "dashboard/admit",
            element: <Admit />,
          },
          {
            path: "dashboard/classmates",
            element: <Classmates />,
          },
          {
            path: "dashboard/create-classroom",
            element: <CreateClassroom />,
          },
          {
            path: "dashboard/manage-students",
            element: <ManageStudent />,
          },
          {
            path: "dashboard/mystudents",
            element: <MyStudents />,
          },
          {
            path: "dashboard/manage-teachers",
            element: <ManageTeachers />,
          },
          {
            path: "dashboard/view-timetable",
            element: <Timetable />,
          },

        ]
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
