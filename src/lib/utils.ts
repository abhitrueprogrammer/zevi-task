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

export function getStarsArray(rating: number) {
  const fullStars = Math.floor(rating);
  const starArr = [];

  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }

  if (rating < 5) {
    const emptyStars = 5 - starArr.length;
    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }

  return starArr;
}
