import React from "react";
import { Search } from "lucide-react";

const SearchForm = ({query} : {query?:string}) => {
//   const query = "Test";
  return (
    <form
      action=""
      className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg w-full max-w-md"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 search-form"
        placeholder="Search projects..."
      />
      {/* {query && <SearchFormReset />} */}
      
      <button
        type="submit"
        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
      >
        <Search className="size-5" />
      </button>
    </form>
  );
};

export default SearchForm;
