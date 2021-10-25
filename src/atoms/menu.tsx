import { atom } from "recoil";

export const selectedMenu = atom<any>({
  key: "selectedMenu",
  default: "",
});
