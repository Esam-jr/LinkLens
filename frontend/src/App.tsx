import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OnbordingPage from "./pages/OnbordingPage";
import Callpage from "./pages/Callpage";
import ChatPage from "./pages/ChatPage";
import NotificationsPage from "./pages/NotificationsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnbordingPage />} />
        <Route path="/call" element={<Callpage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
