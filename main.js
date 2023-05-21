const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

const {default: OBSWebSocket} = require('obs-websocket-js');//obs-websocket-jsさん、electronで使うにはこういう書き方しなきゃなんだって。変なの。

//// ここからwindowの設定 ////
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'obs-directory-music-player',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.webContents.openDevTools({ mode: 'detach' });//起動時に別窓でデベロッパツールを開く
  mainWindow.loadFile('index.html');
};

app.once('ready', () => {
  createWindow();
});

app.once('window-all-closed', () => app.quit());
//// ここまでwindowの設定 ////

//// ここからobs-websocket-jsの接続設定 ////
const obs = new OBSWebSocket();

ipcMain.on('connectionOnClick', async(_event, arg) => { //レンダラ側で接続ボタンが押された時にobsと接続する
  console.log(arg.port);
  console.log(arg.password);
  await obs.connect('ws://127.0.0.1:'+arg.port, arg.password);
})

//// ここまでobs-websocket-jsの接続設定 ////