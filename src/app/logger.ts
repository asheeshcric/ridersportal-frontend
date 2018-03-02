// Building a customized logger that works only in the development mode

import {isDevMode} from "@angular/core";

export function log(message: any) {
  if (isDevMode()) {
    console.log(message);
  }
}

export function logError(message: any) {
  if (isDevMode()) {
    console.error(message);
  }
}
