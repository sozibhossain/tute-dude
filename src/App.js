import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FriendsReferred from './Pages/FriendsReferred/FriendsReferred';
import Profile from './Pages/Profile/Profile';
import ReferEarn from './Pages/ReferEarn/ReferEarn';
import Header from './Pages/Shared/Header/Header';
import UIUX from './Pages/UIUX/UIUX';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Profile>
          <Routes>
            <Route path="/uiux" element={<UIUX/>} />
            <Route path="/ReferEarn" element={<ReferEarn/>} />
            <Route path="/FriendsReferred" element={<FriendsReferred/>} />
            <Route path="/" element={<FriendsReferred/>} />
          </Routes>
        </Profile>
      </BrowserRouter>
    </div>
  );
}

export default App;
