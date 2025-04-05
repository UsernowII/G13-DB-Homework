import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function SongForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({ title: '', artistId: '', releaseYear: '', duration: '', coverUrl: '' });
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/artists')
      .then((response) => setArtists(response.data))
      .catch((err) => setError(err));

    if (id) {
      axios.get(`http://localhost:3000/songs/${id}`)
        .then((response) => {
          setSong(response.data);
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
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? axios.put(`http://localhost:3000/songs/${id}`, song) : axios.post('http://localhost:3000/songs', song);
    request
      .then(() => navigate('/songs'))
      .catch((err) => setError(err));
  };

  if (loading) return <p>Cargando formulario...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={song.title} onChange={handleChange} placeholder="Título" />
      <select name="artistId" value={song.artistId} onChange={handleChange}>
        <option value="">Selecciona un artista</option>
        {artists.map((artist) => (
          <option key={artist.id} value={artist.id}>{artist.name}</option>
        ))}
      </select>
      <input name="releaseYear" value={song.releaseYear} onChange={handleChange} placeholder="Año de lanzamiento" />
      <input name="duration" value={song.duration} onChange={handleChange} placeholder="Duración (segundos)" />
      <input name="coverUrl" value={song.coverUrl} onChange={handleChange} placeholder="URL de la portada" />
      <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}

export default SongForm;