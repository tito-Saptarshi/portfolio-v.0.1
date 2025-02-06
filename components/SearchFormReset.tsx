"use client";

import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button
      type="reset"
      onClick={reset}
      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition"
    >
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
