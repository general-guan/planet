import { Notification, ipcMain } from "electron";

export const ipcMainInit = () => {
  ipcMain.on("notifications", (_, { title, body }) => {
    new Notification({
      title: title,
      body: body,
    }).show();
  });
};
