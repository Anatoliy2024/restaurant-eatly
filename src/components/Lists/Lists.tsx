import { ArrayType } from "@/data/data"
import style from "./List.module.scss"
import Link from "next/link"
import Image from "next/image"
import { EditStar } from "@/assets/EditStar"
import { ArrowRight } from "@/assets/ArrowRight"
import { BookMark } from "@/assets/BookMark"
import { Heart } from "@/assets/Heart"

export function Lists({
  array,
  titleViolet,
  type,
  href,
}: {
  array: ArrayType[]
  titleViolet: string
  type: string
  href: string
}) {
  const getRestaurantHashClass = (hash: string) => {
    switch (hash) {
      case "Healthy":
        return style.healthy
      case "Trending":
        return style.trending
      case "Supreme":
        return style.supreme
      default:
        return ""
    }
  }

  return (
    <section className={style.lists}>
      <h2 className={style.lists__title}>
        Our Top <span className="violetColor">{titleViolet}</span>
      </h2>
      <div className={style.lists__list}>
        {type === "restaurant" &&
          array.map((restaurant, i) => (
            <RestaurantCard
              restaurant={restaurant}
              key={i}
              getRestaurantHashClass={getRestaurantHashClass}
            />
          ))}
        {type === "dishes" &&
          array.map((dish, i) => (
            <DishCard
              dish={dish}
              key={i}
              getRestaurantHashClass={getRestaurantHashClass}
            />
          ))}
      </div>

      <div className={style.lists__buttonWrapper}>
        <Link href={href} className={style.lists__buttonShowAll}>
          <span>View All </span>
          <ArrowRight />
        </Link>
      </div>
    </section>
  )
}

function RestaurantCard({
  restaurant,
  getRestaurantHashClass,
}: {
  restaurant: ArrayType
  getRestaurantHashClass: (hash: string) => string
}) {
  return (
    <div className={style.item}>
      <Link href={restaurant.href} className={style.item__imageWrapper}>
        <Image
          src={restaurant.image}
          width={395}
          height={176}
          alt={restaurant.title}
        />
      </Link>
      <div className={style.item__content}>
        <div className={style.item__colOne}>
          <span
            className={`${style.item__hash} ${getRestaurantHashClass(
              restaurant.hash
            )}`}
          >
            {restaurant.hash}
          </span>
          <h3 className={style.item__title}>{restaurant.title}</h3>
          <div className={style.item__info}>
            <div className={style.item__time}>{restaurant.time}min •</div>
            <div className={style.item__rating}>
              <EditStar />
              <div>{restaurant.rating}</div>
            </div>
          </div>
        </div>
        <div className={style.item__colTwo}>
          <div className={style.item__svgWrapper}>
            <BookMark />
          </div>
        </div>
      </div>
    </div>
  )
}
function DishCard({
  dish,
  getRestaurantHashClass,
}: {
  dish: ArrayType
  getRestaurantHashClass: (hash: string) => string
}) {
  return (
    <div className={style.itemDish}>
      <div className={style.itemDish__heart}>
        <Heart />
      </div>
      <Link href={dish.href} className={style.itemDish__imageWrapper}>
        <Image src={dish.image} width={184} height={184} alt={dish.title} />
      </Link>
      <div className={style.itemDish__content}>
        <div className={style.itemDish__colOne}>
          <span
            className={`${style.itemDish__hash} 
            ${getRestaurantHashClass(dish.hash)}`}
          >
            {dish.hash}
          </span>
          <h3 className={style.itemDish__title}>{dish.title}</h3>
          <div className={style.itemDish__info}>
            <div className={style.itemDish__time}>{dish.time}min •</div>
            <div className={style.itemDish__rating}>
              <EditStar />
              <div>{dish.rating}</div>
            </div>
          </div>
          <div className={style.itemDish__footer}>
            <div className={style.itemDish__priceWrapper}>
              <span>${dish.price}</span>
              <span>.99</span>
            </div>
            <div className={style.itemDish__buttonAdd}>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}
