import { NavLink, useRouteError } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <FaExclamationTriangle className="text-4xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Oops!</h1>
          <p className="text-indigo-100">Something went wrong</p>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {error?.status || 404} - {error?.statusText || "Page Not Found"}
            </h2>
            <p className="text-gray-600 mb-6">
              {error?.data || "The page you're looking for doesn't exist or has been moved."}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200">
              <p className="text-sm text-gray-500 font-mono">
                Error ID: {error?.internal ? error.internal : "ERR_UNKNOWN"}
              </p>
            {error?.message && (
                <p className="text-sm text-gray-500 font-mono mt-1">
                  {error.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink 
              to="/" 
              className="flex-1 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md"
            >
              <FaHome className="mr-2" />
              Go Home
            </NavLink>
            
            <button 
              onClick={() => window.location.reload()} 
              className="flex-1 flex items-center justify-center px-6 py-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <FaRedo className="mr-2" />
              Try Again
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              If this problem persists, please contact our support team.
            </p>
            <NavLink 
              to="/contact" 
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2 inline-block"
            >
              Contact Support
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};