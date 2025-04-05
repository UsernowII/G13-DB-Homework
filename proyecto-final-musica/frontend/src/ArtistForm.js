import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ArtistForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState({ name: '', bio: '', photoUrl: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/artists/${id}`)
        .then((response) => {
          setArtist(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? axios.put(`http://localhost:3000/artists/${id}`, artist) : axios.post('http://localhost:3000/artists', artist);
    request
      .then(() => navigate('/artists'))
      .catch((err) => setError(err));
  };

  if (loading) return <p>Cargando formulario...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={artist.name} onChange={handleChange} placeholder="Nombre" />
      <textarea name="bio" value={artist.bio} onChange={handleChange} placeholder="Biografía" />
      <input name="photoUrl" value={artist.photoUrl} onChange={handleChange} placeholder="URL de la foto" />
      <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default ArtistForm;