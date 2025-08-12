import { NavLink } from "react-router-dom";
import { MdPeople, MdPublic, MdLocationOn } from "react-icons/md";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="group">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border border-gray-100">
        {/* Flag Image with Overlay Effect */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={flags.svg} 
            alt={flags.alt || `Flag of ${name.common}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Region Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-sm font-medium text-indigo-700 shadow-md">
            {region}
          </div>
        </div>
        
        {/* Country Information */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900 truncate">
              {name.common.length > 20
                ? name.common.slice(0, 20) + "..."
                : name.common}
            </h3>
            <div className="flex-shrink-0 ml-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(72,187,120,0.5)]"></div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            {/* Population */}
            <div className="flex items-center group/item">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center mr-3 text-indigo-600 group-hover/item:bg-indigo-100 transition-colors duration-300">
                <MdPeople className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Population</p>
                <p className="text-gray-900 font-medium">{population.toLocaleString()}</p>
              </div>
            </div>
            
            {/* Region */}
            <div className="flex items-center group/item">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mr-3 text-purple-600 group-hover/item:bg-purple-100 transition-colors duration-300">
                <MdPublic className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Region</p>
                <p className="text-gray-900 font-medium">{region}</p>
              </div>
            </div>
            
            {/* Capital */}
            <div className="flex items-center group/item">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-3 text-blue-600 group-hover/item:bg-blue-100 transition-colors duration-300">
                <MdLocationOn className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Capital</p>
                <p className="text-gray-900 font-medium">{capital?.[0] || "N/A"}</p>
              </div>
            </div>
          </div>
          
          {/* Read More Button */}
          <NavLink 
            to={`/country/${name.common}`}
            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
          >
            <span>Explore Details</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </li>
  );
};