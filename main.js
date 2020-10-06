const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 622, // 22px is added because it counts the title bar into the calculation
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    maximizable: false
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

