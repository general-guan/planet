import { Notification, ipcMain } from "electron";

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
};
