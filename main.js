const { app, BrowserWindow, Menu } = require('electron');
//Menu.setApplicationMenu(false);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    maximizable: false,
    center: true,
    useContentSize: true,
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

