export function AdPanel() {
  const hasAds = false; // Replace with your ad logic

  return (
    <div className="w-72 bg-white dark:bg-gray-800 shadow-lg sticky right-0 top-0 h-screen overflow-y-auto">
      <div className="p-4 h-full flex flex-col items-center justify-center">
        {hasAds ? (
          <div>
            {/* Add your ad components here */}
            <p>Advertisement Content</p>
          </div>
        ) : (
          <div className="text-gray-500 dark:text-gray-400">
            {/* <p>ADS Here</p> */}
          </div>
        )}
      </div>
    </div>
  );
}
