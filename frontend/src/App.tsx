import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OnboardingPage from "./pages/OnboardingPage.tsx";
import Callpage from "./pages/Callpage";
import ChatPage from "./pages/ChatPage";
import NotificationsPage from "./pages/NotificationsPage";
import { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader.tsx";
import useAuthUser from "./hooks/useAuthUser.ts";

function App() {
  const { isLoading, authUser } = useAuthUser();
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="h-screen">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/call"
          element={authUser ? <Callpage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/notifications"
          element={
            authUser ? <NotificationsPage /> : <Navigate to={"/login"} />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
