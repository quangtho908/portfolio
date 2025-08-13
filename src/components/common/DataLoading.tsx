"use client";

export default function DataLoading() {
  return (
    <div className="bg-opacity-80 absolute inset-0 z-10 flex justify-center bg-white pt-5 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900">Loading data...</p>
          <p className="mt-1 text-sm text-gray-500">Please waiting minutes</p>
        </div>
      </div>
    </div>
  );
}
