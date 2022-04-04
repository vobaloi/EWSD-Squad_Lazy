import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login'
import HomePage from './components/Home/Home'
import ViewIdeas from './components/ViewIdeas/ViewIdeas'
import WriteIdea from './components/WriteIdea/WriteIdea'
import ManagementUsers from './components/ManagementUsers/ManagementsUsers'
import ManagementIdeas from './components/ManagementIdeas/ManagementIdeas'
import SettingProfiles from './components/SettingProfiles/SettingProfiles'
import Dashboard from './components/Dashboard/Dashboard';

//authContext
import AuthContextProvider from './contexts/AuthContext'

//departmentContext
import DepartmentContextProvider from './contexts/DepartmentContext';

//department
import DepartmentsManagement from './components/DepartmentsManagement/DepartmentsManagement';
import AddNewDepart from './components/DepartmentsManagement/AddNewDepart/AddNewDepart';

//categories
import CategoriesManagement from './components/CategoriesManagement/CategoriesManagement';


import PageNotFound from './pages/404Page';
import ProtectedRoutes from './components/route/ProtectedRoutes/ProtectedRoutes'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthContextProvider >
        <DepartmentContextProvider>
          <Routes >
            <Route path='/' element={<App />} />
            <Route path='login' element={<Login />} />
            <Route path='/' element={<ProtectedRoutes />} >
              <Route path='home' element={<HomePage />} >
                <Route path='/home' element={<Navigate replace to='dashboard' />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='viewideas' element={<ViewIdeas />} />
                <Route path='writeidea' element={<WriteIdea />} />
                <Route path='managementusers' element={<ManagementUsers />} />
                <Route path='managementideas' element={<ManagementIdeas />} />
                <Route path='departments' element={<DepartmentsManagement />} />
                <Route path='newdepartment' element={<AddNewDepart />} />
                <Route path='categories' element={<CategoriesManagement />} />




                <Route path='settingprofiles' element={<SettingProfiles />} />
              </Route>
            </Route>
            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </DepartmentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

