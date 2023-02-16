import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { Loading } from "../components/Loading";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Result } from "../interfaces";
import { fetchRepo } from "../utils";

const Details = () => {
  let { owner, repo } = useParams();

  const { isLoading, data, isError, error } = useQuery<Result>(
    ['repos', owner, repo], 
    () => fetchRepo(owner, repo)
)

  if (isLoading) {
    return <Loading />;
  }

  if (isError) return <p>{(error as AxiosError).message}</p>;

  return (
    <>
      <h1 className="bg-green-400 flex justify-center">
        Welcome to details page
      </h1>
      <Link to="/">
        <button>Back ⬅︎</button>
      </Link>
      <table className="border-slate-500 min-w-full">
        <thead className="bg-zinc-300 border-b">
          <tr>
            <th className="border border-slate-600">Repository name</th>
            <th className="border border-slate-600">Author</th>
            <th className="border border-slate-600">Language</th>
            <th className="border border-slate-600">Private/Public</th>
            <th className="border border-slate-600">Stars</th>
            <th className="border border-slate-600">Watchers</th>
            <th className="border border-slate-600">Forks</th>
            <th className="border border-slate-600">Issues</th>
            <th className="border border-slate-600">Topics</th>
            <th className="border border-slate-600">Date Generated</th>
            <th className="border border-slate-600">Direct Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-800 px-6 py-4">
              {data.name}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.owner.login}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.language || "No language identified"}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.private ? <p>Private</p> : <p>Public</p>}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.stargazers_count.toLocaleString()}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.watchers_count.toLocaleString()}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.forks.toLocaleString()}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.open_issues.toLocaleString()}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {data.topics.length === 0
                ? "No topics found."
                : data.topics.map((topic, index) => (
                    <li className="list-none" key={index}>
                      {topic}
                    </li>
                  ))}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              {format(new Date(data.created_at), "MMMM dd, yyyy")}
            </td>
            <td className="border border-slate-800 px-6 py-4">
              <a className="hover:text-green-800" href={data.html_url}>
                {data.html_url}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Details;
