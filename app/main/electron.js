const path = require('path');
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    // 集成node
    webPreferences: {
      nodeIntegration: true, 
    },
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate',  () => { 
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  }
)})