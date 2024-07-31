import { create } from "zustand";

export type CurrentMenu = "tomato-clock" | "favorite-sites";

interface MenuState {
  currentMenu: CurrentMenu;
  setCurrentMenu: (menu: CurrentMenu) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  currentMenu: "favorite-sites",
  setCurrentMenu: (menu) => set(() => ({ currentMenu: menu })),
}));
