const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'obs-directory-music-player',
  });

  mainWindow.webContents.openDevTools({ mode: 'detach' });//起動時に別窓でデベロッパツールを開く
  mainWindow.loadFile('index.html');
};

app.once('ready', () => {
  createWindow();
});

app.once('window-all-closed', () => app.quit());