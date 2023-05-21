const { ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld('electron', {
  connectionOnClick: async (arg) => ipcRenderer.send('connectionOnClick', arg),
	selectDirectoryOnClick: async () => ipcRenderer.invoke('selectDirectoryOnClick'),
});