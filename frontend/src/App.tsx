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
import Layout from "./components/Layout.tsx";
import { useThemeStore } from "./store/useThemeStore.ts";

function App() {
  const { isLoading, authUser } = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnbording;

  if (isLoading) {
    return <PageLoader />;
  }
  const { theme } = useThemeStore();

  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignupPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/call"
          element={isAuthenticated ? <Callpage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <ChatPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/notifications"
          element={
            isAuthenticated ? <NotificationsPage /> : <Navigate to={"/login"} />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
