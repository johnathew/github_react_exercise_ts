import { Form } from "../components/Form";
import { SearchResults } from "../components/SearchResults";
import { useFormQuery } from "../hooks/useFormQuery";

const Search = () => {
  const { handleSubmit, query } = useFormQuery();

  return (
    <>
      <h1 className="bg-lime-900 flex justify-center text-zinc-100 font-semibold">GitHub Repo Search</h1>
      <div className="bg-gray-800 flex-col">
        <div className="flex">
        <Form handleSubmit={handleSubmit} />
        <button className="bg-slate-300 p-2 m-2 rounded-md">Sort (by stars)</button>
        </div>
        {query.length > 0 && <SearchResults query={query} />}
        
      </div>
    </>
  );
};

export default Search;

