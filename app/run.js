const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    toolbar: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
	  //devTools: false
    }
  });
  win.loadFile('index.html');
}
	  
app.on('ready', createWindow);

