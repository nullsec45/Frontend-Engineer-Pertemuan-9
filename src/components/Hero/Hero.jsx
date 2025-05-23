import React, {useEffect,useState} from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [movie,setMovie]=useState('');

  useEffect(() => {
    async function fetchMovie(){
      const url='https://www.omdbapi.com/?apikey=cf4d6b5e&i=tt2975590';

      const response=await fetch(url);
      const data=await response.json();

      setMovie(data);
    }

    fetchMovie();
  },[]);


  return (
   <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
            Genre: {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
           {movie.p}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  )
}

export default Hero