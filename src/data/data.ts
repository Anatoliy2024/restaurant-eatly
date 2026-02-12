export type ArrayType = {
  id: number
  href: string
  image: string
  title: string
  hash: string
  time: number
  rating: number
  price?: number
  liked?: boolean
}
export type ReviewType = {
  id: number
  username: string
  time: number
  text: string
  stars: number
  image: string
}

export const navbarList = [
  { title: "Menu", href: "/menu" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
]

export const restaurantList: ArrayType[] = [
  {
    id: 1,
    title: "The Chicken King",
    image: "/BurgerKing.jpg",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
  },
  {
    id: 2,

    title: "The Burger King",
    image: "/BurgerKing.jpg",
    hash: "Trending",
    time: 24,
    rating: 4.9,
    href: "#",
  },
  {
    id: 3,

    title: "The Chicken King",
    image: "/BurgerKing.jpg",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
  },
  {
    id: 4,

    title: "The Burger King",
    image: "/BurgerKing.jpg",
    hash: "Trending",
    time: 24,
    rating: 4.9,
    href: "#",
  },
  {
    id: 5,

    title: "The Chicken King",
    image: "/BurgerKing.jpg",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
  },
]

export const dishesList: ArrayType[] = [
  {
    id: 1,

    title: "Chicken Hell",
    image: "/FoodImage.png",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
    price: 12,
    liked: false,
  },
  {
    id: 2,

    title: "Swe Dish",
    image: "/FoodImage-1.png",
    hash: "Trending",
    time: 34,
    rating: 4.9,
    href: "#",
    price: 19,
    liked: false,
  },
  {
    id: 3,

    title: "Swe Dish",
    image: "/FoodImage-2.png",
    hash: "Supreme",
    time: 34,
    rating: 4.8,
    href: "#",
    price: 19,
    liked: false,
  },
  {
    id: 4,

    title: "Chicken Hell",
    image: "/FoodImage.png",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
    price: 12,
    liked: false,
  },
  {
    id: 5,

    title: "Swe Dish",
    image: "/FoodImage-1.png",
    hash: "Trending",
    time: 34,
    rating: 4.9,
    href: "#",
    price: 19,
    liked: false,
  },
  {
    id: 6,

    title: "Chicken Hell",
    image: "/FoodImage-2.png",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
    price: 12,
    liked: false,
  },
  {
    id: 6,

    title: "Swe Dish",
    image: "/FoodImage.png",
    hash: "Trending",
    time: 34,
    rating: 4.9,
    href: "#",
    price: 19,
    liked: false,
  },
  {
    id: 7,

    title: "Swe Dish",
    image: "/FoodImage-1.png",
    hash: "Supreme",
    time: 34,
    rating: 4.8,
    href: "#",
    price: 19,
    liked: false,
  },
  {
    id: 8,

    title: "Chicken Hell",
    image: "/FoodImage-2.png",
    hash: "Healthy",
    time: 24,
    rating: 4.8,
    href: "#",
    price: 12,
    liked: false,
  },
  {
    id: 9,

    title: "Swe Dish",
    image: "/FoodImage.png",
    hash: "Trending",
    time: 34,
    rating: 4.9,
    href: "#",
    price: 19,
    liked: false,
  },
]

export const reviewsList: ReviewType[] = [
  {
    id: 1,
    username: "Alexander R.",
    time: 1,
    text: "Fast delivery and the food arrived hot. The courier was polite and everything was packed neatly. Will definitely order again.",
    stars: 5,
    image: "/people/people-(1).jpg",
  },
  {
    id: 2,

    username: "Maria L.",
    time: 2,
    text: "The pizza was delicious with plenty of toppings. Delivery was even earlier than expected.",
    stars: 5,
    image: "/people/people-(3).jpg",
  },
  {
    id: 3,

    username: "Daniel K.",
    time: 3,
    text: "I order regularly and the quality is always consistent. Fresh ingredients and great taste.",
    stars: 5,
    image: "/people/people-(2).jpg",
  },
  {
    id: 4,

    username: "Olivia S.",
    time: 1,
    text: "Food arrived warm and well packaged. Slight delay, but the taste made up for it.",
    stars: 4,
    image: "/people/people-(4).jpg",
  },
  {
    id: 5,

    username: "Michael T.",
    time: 2,
    text: "Excellent service and easy ordering process. Delivery was quick and smooth.",
    stars: 5,
    image: "/people/people-(5).jpg",
  },
  {
    id: 6,

    username: "Sophia W.",
    time: 2,
    text: "Large portions and very satisfying meals. Good value for the price.",
    stars: 5,
    image: "/people/people-(6).jpg",
  },
  {
    id: 7,

    username: "James P.",
    time: 1,
    text: "The sushi was fresh and beautifully presented. Delivery was right on time.",
    stars: 5,
    image: "/people/people-(8).jpg",
  },
  {
    id: 8,

    username: "Emma C.",
    time: 1,
    text: "Great variety on the menu and everything tasted amazing. Highly recommend.",
    stars: 5,
    image: "/people/people-(7).jpg",
  },
  {
    id: 9,

    username: "Liam H.",
    time: 4,
    text: "Burger was juicy and fries were crispy. Everything arrived hot and fresh.",
    stars: 5,
    image: "/people/people-(9).jpg",
  },

  {
    id: 10,

    username: "Isabella M.",
    time: 1,
    text: "Very convenient service and friendly courier. The food quality exceeded my expectations.",
    stars: 5,
    image: "/people/people-(10).jpg",
  },
  {
    id: 11,

    username: "Noah B.",
    time: 1,
    text: "Quick delivery and excellent packaging. Nothing was spilled or damaged.",
    stars: 4,
    image: "/people/people-(12).jpg",
  },
  {
    id: 12,

    username: "Ava D.",
    time: 2,
    text: "Tasty desserts and great presentation. Perfect for a cozy evening at home.",
    stars: 5,
    image: "/people/people-(11).jpg",
  },
  {
    id: 13,
    username: "Ethan J.",
    time: 1,
    text: "The pasta was cooked perfectly and full of flavor. Will definitely order again.",
    stars: 5,
    image: "/people/people-(13).jpg",
  },
  {
    id: 14,
    username: "Mia F.",
    time: 1,
    text: "Fresh salads and healthy options available. Delivery was fast and reliable.",
    stars: 5,
    image: "/people/people-(16).jpg",
  },
  {
    id: 15,
    username: "Lucas G.",
    time: 1,
    text: "Everything arrived exactly as ordered. Great experience overall.",
    stars: 5,
    image: "/people/people-(14).jpg",
  },
]
