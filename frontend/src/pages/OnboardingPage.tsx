import PageLoader from "../components/PageLoader";
import useAuthUser from "../hooks/useAuthUser";

function OnboardingPage() {
  const { isLoading, authUser } = useAuthUser();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }
  return <div>OnbordingPage</div>;
}

export default OnboardingPage;
