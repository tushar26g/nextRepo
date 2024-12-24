export function AdPanel() {
  const hasAds = false; // Replace with your ad logic

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg fixed right-0 top-16 bottom-0 overflow-y-auto">
      <div className="p-4">
        {hasAds ? (
          <div>
            {/* Add your ad components here */}
            <p>Advertisement Content</p>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            ADS Here
          </div>
        )}
      </div>
    </div>
  );
}
