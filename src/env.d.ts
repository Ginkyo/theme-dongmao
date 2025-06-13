/// <reference types="vite/client" />

import { type Dongmao } from "./main";

declare global {
  interface Window {
    dongmao: Dongmao;
  }
}