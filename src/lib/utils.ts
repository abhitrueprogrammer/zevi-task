import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function selectRandomItems<T>(array: T[], num: number): T[] {
  if (num > array.length) {
    console.log("Error: num is greater than array length");
    return [];
  }

  let randomItems: T[] = [];
  while (randomItems.length < num) {
    let index = Math.floor(Math.random() * array.length);
    if (!randomItems.includes(array[index])) {
      randomItems.push(array[index]);
    }
  }

  return randomItems;
}
