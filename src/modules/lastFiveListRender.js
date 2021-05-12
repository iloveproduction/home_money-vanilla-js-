import { createItem } from "./createItem";

export function lastFiveListRender(place, arr) {
  if (arr.length < 5) {
    for (let i in arr) {
      createItem(i, arr, place, false);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      createItem(i, arr, place, false);
    }
  }
}
