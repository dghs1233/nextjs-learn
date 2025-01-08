import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params} : IParams) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({params} : IParams) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  )
}