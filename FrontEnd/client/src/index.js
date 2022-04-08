import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import ViewIdeas from "./components/ViewIdeas/ViewIdeas";
import WriteIdea from "./components/WriteIdea/WriteIdea";
import ManagementUsers from "./components/ManagementUsers/ManagementsUsers";
import ManagementIdeas from "./components/ManagementIdeas/ManagementIdeas";
import SettingProfiles from "./components/SettingProfiles/SettingProfiles";
import UpdateProfile from "./components/SettingProfiles/UpdateProfile";
import Dashboard from "./components/Dashboard/Dashboard";

//authContext
import AuthContextProvider from "./contexts/AuthContext";

//departmentContext
import DepartmentContextProvider from "./contexts/DepartmentContext";

//department
import DepartmentsManagement from "./components/DepartmentsManagement/DepartmentsManagement";
import AddNewDepart from "./components/DepartmentsManagement/AddNewDepart/AddNewDepart";

//categories
import CategoriesManagement from "./components/CategoriesManagement/CategoriesManagement";

import PageNotFound from "./pages/404Page";
import ProtectedRoutes from "./components/route/ProtectedRoutes/ProtectedRoutes";
import CategoryContextProvider from "./contexts/CategoryContext";
import AddNewCategory from "./components/CategoriesManagement/AddNewCategory/AddNewCategory";
import UpdateCategory from "./components/CategoriesManagement/UpdateCategory";
import UpdateUser from "./components/ManagementUsers/UpdateUser";
import UpdateDepart from "./components/DepartmentsManagement/UpdateDepartment/UpdateDepartment";




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DepartmentContextProvider>
          <CategoryContextProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="login" element={<Login />} />
              <Route path="/" element={<ProtectedRoutes />}>
                <Route path="home" element={<HomePage />}>
                  <Route
                    path="/home"
                    element={<Navigate replace to="dashboard" />}
                  />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="view-ideas" element={<ViewIdeas />} />
                  <Route path="write-idea" element={<WriteIdea />} />
                  <Route path="management-users" element={<ManagementUsers />} />
                  <Route path="update-user" element={<UpdateUser />} />
                  <Route path="management-ideas" element={<ManagementIdeas />} />


                  {/* department */}
                  <Route path="departments" element={<DepartmentsManagement />} />
                  <Route path="new-department" element={<AddNewDepart />} />
                  <Route path="update-department/:_id" element={<UpdateDepart />} />


                  {/* categories */}
                  <Route path="categories" element={<CategoriesManagement />} />
                  <Route path="new-category" element={<AddNewCategory />} />
                  <Route path="update-category" element={<UpdateCategory />} />

                  <Route path="setting-profiles" element={<SettingProfiles />} />
                  <Route path="update-profile" element={<UpdateProfile />} />
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </CategoryContextProvider>
        </DepartmentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
