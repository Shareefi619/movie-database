import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
import { SiThemoviedatabase } from "react-icons/si";
import {BiSolidMoviePlay} from "react-icons/bi"
export default function Home() {
  return (
    <div className="bg-black/75 min-h-screen">

      <Head>
        <title>Movie App</title>
        <meta name="description" content="A simple movie data for user" />
      </Head>
      <main className="mx-auto py-10 flex gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 text-white hover:text-red-500 mt-4">
          Movie Database
        </h2>
        <SiThemoviedatabase color="blue" size={60}/>
        <BiSolidMoviePlay color = "Red" size={60}/>
      </main>
      <MovieSearch />
    </div>
  );
}
