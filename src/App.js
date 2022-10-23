import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './components/bootstrap.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import EditProfile from './components/EditProfile';


import './App.css'
import StudentDashboard from './components/StudentDashboard';
import MyClass from './components/MyClass';
import CreateClass from './components/CreateClass';
import Result from './components/Result';
import NotFound from './components/NotFound';
import CreateQuestion from './components/CreateQuestion';
import QuestionList from './components/QuestionList';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="content">
          <span>
          </span>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mDashboard" element={<Dashboard />} />
            <Route path="/sDashboard" element={<StudentDashboard />} />
            <Route path="/mDashboard/edit" element={<EditProfile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mDashboard/myExam/edit/info:examId" element={<MyClass />} />
            <Route path="/mDashboard/myExam/edit/questions:examId" element={<CreateQuestion />} />
            <Route path="/mDashboard/myExam/edit/questionList:examId" element={<QuestionList />} />
            <Route path="/mDashboard/myExam/result:examId" element={<Result />} />
            <Route path="/mDashboard/addClass" element={<CreateClass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
