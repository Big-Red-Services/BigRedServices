import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import SettingsPage from './pages/SettingsPage';
import MessagePage from './pages/MessagePage';
import JobsPage from './pages/JobsPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LearnModal from './components/LearnModal';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <LearnModal/>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/messages' element={<MessagePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/confirm' element={<ConfirmationPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

// hi I'm Ming

export default App;
