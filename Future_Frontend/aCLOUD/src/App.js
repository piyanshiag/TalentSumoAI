import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Components/CreateInterview/Create';
// import Access from './Components/AccessInterview/Access';
import Notification from './Components/InterviewNotification/Notification';
import Dashboard from './Components/Dashboard/Dashboard';
import Interaction from './Components/Interaction/Interaction';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Report from './Components/Report/Report';
// import Report from './Components/HR-DEMO/Report';
import LeaderboardReport from './Components/LeaderboardReport/LeaderboardReport';
import Form from './Components/StudentInteractionForm/Form';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ViewReports from './Components/ViewReports/ViewReports';
import Certificate from './Components/Certificate/Certificate';
import ThankYou from './Components/ThankYou/ThankYou';
import Team from './Components/Team/Team';
import Profile from './Components/Profile/Profile';
import Welcome from './Components/Videos/Welcome';
import Work from './Components/Videos/Work';
import Recording from './Components/Videos/Recording';
import Start from './Components/Videos/Start';
import Question from './Components/Videos/Question';
import AudioRecording from './Components/Audios/AudioRecording';
import Confirm from './Components/Videos/Confirm';
import Trouble from './Components/Videos/Trouble';
import Mcq from './Components/MCQ/Mcq';
import Thanks from './Components/Videos/ThankYou';
import Responses from './Components/Responses/Responses';
import Image from './Components/ImageUpload/Image';
import Text from './Components/Text/Text';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/create' element={<Create />} />
          {/* <Route exact path='/access' element={<Access />} /> */}
          <Route exact path='/notification&message' element={<Notification />} />
          <Route exact path='/thankyou' element={<ThankYou />} />
          <Route exact path='/interaction' element={<Interaction />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/teams' element={<Team />} />
          {/* <Route exact path="/report" element={<Report />} /> */}
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/leaderboardReport" element={<LeaderboardReport />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/resetPassword' element={<ForgetPassword />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/viewReport' element={<ViewReports />} />
          <Route exact path='/certificate' element={<Certificate />} />
          <Route exact path='/welcome' element={<Welcome />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/recording' element={<Recording />} />
          <Route exact path='/confirm' element={<Confirm />} />
          <Route exact path='/trouble' element={<Trouble />} />
          <Route exact path='/start' element={<Start />} />
          <Route exact path='/question' element={<Question />} />
          <Route exact path='/audiorecording' element={<AudioRecording />} />
          <Route exact path='/mcq' element={<Mcq />} />
          <Route exact path='/imageUpload' element={<Image />} />
          <Route exact path='/text' element={<Text />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/response' element={<Responses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
