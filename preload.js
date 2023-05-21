const { ipcRenderer } = require('electron');

window.connectionOnClick = () => { //レンダラさんのボタンが押されたことをメインさんに教えてあげるやつ
	return ipcRenderer.send('connection');
}