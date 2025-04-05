const sequelize = require('./config/database');
const Artist = require('./models/artist');
const Song = require('./models/song');

async function insertData() {
  try {
    await Artist.bulkCreate([
      { name: 'The Beatles', bio: 'The Beatles were an English rock band formed in Liverpool.', photoUrl: 'https://picsum.photos/id/1015/400/400' },
      { name: 'Adele', bio: 'Adele is an English singer-songwriter known for her soulful voice.', photoUrl: 'https://picsum.photos/id/1016/400/400' },
    ]);

    await Song.bulkCreate([
      { title: 'Hey Jude', artistId: 1, releaseYear: 1968, duration: 431, coverUrl: 'https://picsum.photos/id/1018/400/400' },
      { title: 'Let It Be', artistId: 1, releaseYear: 1970, duration: 243, coverUrl: 'https://picsum.photos/id/1020/400/400' },
      { title: 'Rolling in the Deep', artistId: 2, releaseYear: 2010, duration: 228, coverUrl: 'https://picsum.photos/id/1021/400/400' },
      { title: 'Someone Like You', artistId: 2, releaseYear: 2011, duration: 284, coverUrl: 'https://picsum.photos/id/1022/400/400' },
      { title: 'Hello', artistId: 2, releaseYear: 2015, duration: 295, coverUrl: 'https://picsum.photos/id/1023/400/400' },
    ]);

    console.log('Datos de ejemplo insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos de ejemplo:', error);
  } finally {
    sequelize.close();
  }
}

insertData();