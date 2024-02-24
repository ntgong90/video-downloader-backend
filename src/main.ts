import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Video Downloader backend. This application will do the heavy lifting for the video downloader');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});