import axios, { AxiosError } from "axios";
import { Owner, ResponseAPI, Result } from "../interfaces";

export const getRepos = async (query: string): Promise<ResponseAPI> => {
    const url = `https://api.github.com/search/repositories?q=${query}`

    try {
        const {data} = await axios.get(url)
        return data
    } catch(error) {
        throw new Error((error as AxiosError).message)
    }
}



export const fetchRepo = async (owner: Owner, repo: string): Promise<Result> => {
    const url = `https://api.github.com/repos/${owner}/${repo}`

    try {
        const {data} = await axios.get(url)
        return data
    } catch(error) {
        throw new Error((error as AxiosError).message)
    }
}

