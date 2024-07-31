import { Notification, ipcMain, shell } from "electron";

export const ipcMainInit = (win) => {
  ipcMain.on("notifications", (_, { title, body }) => {
    new Notification({
      title: title,
      body: body,
    }).show();
  });

  ipcMain.on("setAlwaysOnTop", (_, { flag }) => {
    win.setAlwaysOnTop(flag);
  });

  ipcMain.on("openExternal", (_, { url }) => {
    shell.openExternal(url);
  });
};
