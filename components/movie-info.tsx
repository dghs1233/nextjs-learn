import styles from "../styles/movie-info.module.css"
import { API_URL } from "../app/(home)/page";

export async function getMovie(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id:string}){
  const movies = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movies.poster_path} className={styles.poster} alt={movies.title}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movies.title}</h1>
        <h3>⭐{movies.vote_average.toFixed(1)}</h3>
        <p>{movies.overview}</p>
        <a href={movies.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  );
}