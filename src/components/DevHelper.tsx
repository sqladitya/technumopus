// DevHelper - Backend removed from project

const DevHelper = () => {
  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="px-4 py-2 rounded-lg shadow-lg text-white text-sm font-medium bg-blue-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-300" />
          <span>Frontend Only Mode</span>
        </div>
        <div className="mt-2 text-xs opacity-90">
          Backend has been removed from this project.
          <br />
          Newsletter subscriptions show demo responses.
        </div>
      </div>
    </div>
  );
};

export default DevHelper;
