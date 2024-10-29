const Search = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="input shadow-md border-gray-300 px-5 py-3 rounded-xl lg:w-72 transition-all focus:w-80 outline-none bg-gray-700 text-gray-100"
        name="search"
        type="search"
      />
      <svg
        className="size-6 absolute top-3 right-3 text-gray-500 stroke-white"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
};

export default Search;
