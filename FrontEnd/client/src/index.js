import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login'
import HomePage from './components/Home/Home'
import ViewIdeas from './components/ViewIdeas/ViewIdeas'
import WriteIdea from './components/WriteIdea/WriteIdea'
import ManagementUsers from './components/ManagementUsers/ManagementsUsers'
import ManagementIdeas from './components/ManagementIdeas/ManagementIdeas'
import SettingProfiles from './components/SettingProfiles/SettingProfiles'
import Dashboard from './components/Dashboard/Dashboard';
import AuthContextProvider from './contexts/AuthContext'
import PageNotFound from './pages/404Page';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AuthContextProvider >
        <Routes >
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<HomePage />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='viewideas' element={<ViewIdeas />} />
            <Route path='writeidea' element={<WriteIdea />} />
            <Route path='managementusers' element={<ManagementUsers />} />
            <Route path='managementideas' element={<ManagementIdeas />} />
            <Route path='settingprofiles' element={<SettingProfiles />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

