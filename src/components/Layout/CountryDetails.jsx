import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;
  if (!country) return <div className="text-center py-12">Country not found</div>;

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {country && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Country Flag */}
              <div className="flex items-center justify-center">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt || `Flag of ${country.name.common}`}
                  className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              
              {/* Country Details */}
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {country.name.official}
                </h1>
                
                <div className="space-y-4">
                  {/* Native Names */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Native Names:</span>
                    <span className="text-gray-600">
                      {Object.keys(country.name.nativeName || {})
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")}
                    </span>
                  </div>
                  
                  {/* Population */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Population:</span>
                    <span className="text-gray-600">
                      {country.population.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Region */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Region:</span>
                    <span className="text-gray-600">{country.region}</span>
                  </div>
                  
                  {/* Sub Region */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Sub Region:</span>
                    <span className="text-gray-600">{country.subregion}</span>
                  </div>
                  
                  {/* Capital */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Capital:</span>
                    <span className="text-gray-600">
                      {country.capital?.[0] || "N/A"}
                    </span>
                  </div>
                  
                  {/* Top Level Domain */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Top Level Domain:</span>
                    <span className="text-gray-600">
                      {country.tld?.[0] || "N/A"}
                    </span>
                  </div>
                  
                  {/* Currencies */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Currencies:</span>
                    <span className="text-gray-600">
                      {Object.keys(country.currencies || {})
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")}
                    </span>
                  </div>
                  
                  {/* Languages */}
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-gray-700">Languages:</span>
                    <span className="text-gray-600">
                      {Object.keys(country.languages || {})
                        .map((key) => country.languages[key])
                        .join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Back Button */}
          <div className="px-8 pb-8">
            <NavLink to="/country">
              <button className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
                <svg 
                  className="w-5 h-5 mr-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};