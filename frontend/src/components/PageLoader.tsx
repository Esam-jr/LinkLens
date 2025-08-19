import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-theme="bumblebee"
    >
      <LoaderIcon className="size-16 animate-spin text-primary" />
    </div>
  );
}

export default PageLoader;
