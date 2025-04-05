// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtistList from './ArtistList';
import ArtistDetails from './ArtistDetails';
import ArtistForm from './ArtistForm';
import SongList from './SongList';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/" element={<ArtistList />} />
        <Route path="/artists" element={<ArtistList />} />
        <Route path="/artists/new" element={<ArtistForm />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/artists/:id/edit" element={<ArtistForm />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/songs/new" element={<SongForm />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/:id/edit" element={<SongForm />} />
      </Routes>
    </Router>
  );
}

export default App;