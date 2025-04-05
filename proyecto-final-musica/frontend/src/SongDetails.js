import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function SongDetails() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/songs/${id}`)
      .then((response) => {
        setSong(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando canción...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!song) return <p>Canción no encontrada</p>;

  return (
    <div>
      <h2>Detalles de la Canción</h2>
      <h3>{song.title}</h3>
      <p>Artista: {song.Artist.name}</p>
      <p>Año de Lanzamiento: {song.releaseYear}</p>
      <p>Duración: {song.duration} segundos</p>
      <img src={song.coverUrl} alt={song.title} />
      <Link to={`/songs/${song.id}/edit`}>Editar Canción</Link>
    </div>
  );
}

export default SongDetails;