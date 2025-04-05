import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ArtistDetails() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/artists/${id}`)
      .then((response) => {
        setArtist(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando artista...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!artist) return <p>Artista no encontrado</p>;

  return (
    <div>
      <h2>Detalles del Artista</h2>
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
      <img src={artist.photoUrl} alt={artist.name} />
      <Link to={`/artists/${artist.id}/edit`}>Editar Artista</Link>
    </div>
  );
}

export default ArtistDetails;