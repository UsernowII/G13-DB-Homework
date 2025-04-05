import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/songs-with-artists')
      .then((response) => {
        console.log('Respuesta de la API:', response.data);
        setSongs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando canciones...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Canciones</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>{song.title}</Link> - {song.Artist.name} 
          </li>
        ))}
      </ul>
      <Link to="/songs/new">Agregar Canción</Link>
    </div>
  );
}

export default SongList;