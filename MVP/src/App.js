import LandingPage from './pages/LandingPage';
import PostPage from './pages/PostPage';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MessagePage from './pages/MessagePage';
import ProfilePage from './pages/ProfilePage';
import ConfirmPage from './pages/ConfirmPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
