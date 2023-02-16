import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { ResponseAPI } from "../interfaces";
import { getRepos } from "../utils";
import { Loading } from "./Loading";

type ISearchResults = {
  query: string;
};

export const SearchResults = ({ query }: ISearchResults) => {

  const { data, isLoading, error, isError } = useQuery<ResponseAPI>(
    ["repos", query],
    () => getRepos(query)
  );

  if (isLoading) return <Loading />;

  if (isError) return <p>{(error as AxiosError).message}</p>;

  return (
    <>
      <div className="text-neutral-100 m-2 font-mono">
        {data && data.items.length === 0
          ? "No results found with: "
          : "Results with "}
        <b>{query}</b>
      </div>

      <div className="overflow-auto h-3/4 md:overflow-scroll">
        {data.items.map((res) => (
          <div key={res.id}>
            <Link to={`/details/${res.owner.login}/${res.name}`}>
              <ul className="bg-red-100 flex m-2 space-x-4 border-2 hover:border-emerald-900 text-lg">
                <li>RepoName: {res.name} </li>
                <li>ID: {res.id} </li>
                <li>Stars: {res.stargazers_count} </li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
