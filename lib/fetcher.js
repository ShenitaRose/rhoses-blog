import useSWR from 'swr';

const baseURL="http://localhost:3000/";

//take arguments that pass to fetch function that return json data to the fetcher
const response = (...args) => fetch(...args).then(res => res.json())


export default function Fetcher(endpoint){
    const {data, error}= useSWR(`${baseURL}${endpoint}`,response)

    return {
        data,
        isLoading:!error&&!data,
        isError:error
    }
}