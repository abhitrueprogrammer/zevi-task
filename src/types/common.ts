interface Item {
  name: string;
  image: string;
  actualPrice: number;
  discountPrice: number;
  rating: number;
  reviews: number;
  brand: string;
  isWishlisted: boolean;
}

interface Filters {
  mango: boolean;
  hm: boolean;
  500: boolean;
  1000: boolean;
  5: boolean;
  4: boolean;
  3: boolean;
  2: boolean;
  1: boolean;
}
