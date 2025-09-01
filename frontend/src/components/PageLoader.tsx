import { LoaderIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

function PageLoader() {
  const { theme } = useThemeStore();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-theme={theme}
    >
      <LoaderIcon className="size-16 animate-spin text-primary" />
    </div>
  );
}

export default PageLoader;
