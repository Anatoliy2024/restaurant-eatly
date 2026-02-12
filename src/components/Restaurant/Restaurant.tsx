import { restaurantList } from "@/data/data"
import style from "./Restaurant.module.scss"
import Link from "next/link"
import Image from "next/image"
import { EditStar } from "@/assets/EditStar"
import { ArrowRight } from "@/assets/ArrowRight"
import { Quote } from "@/assets/Quote"
import { BookMark } from "@/assets/BookMark"
import { Lists } from "../Lists/Lists"
export function Restaurant() {
  const restaurants = restaurantList.slice(0, 3)
  return (
    <Lists
      array={restaurants}
      titleViolet="Restaurants"
      type="restaurant"
      href="/restaurant"
    />
    // <section className={style.restaurant}>
    //   <h2 className={style.restaurant__title}>
    //     Our Top <span className="violetColor">Restaurants</span>
    //   </h2>
    //   <div className={style.restaurant__list}>
    //     {restaurants.map((restaurant, i) => (
    //       <div key={i} className={style.item}>
    //         <Link href={restaurant.href} className={style.item__imageWrapper}>
    //           <Image
    //             src={restaurant.image}
    //             width={395}
    //             height={176}
    //             alt={restaurant.title}
    //           />
    //         </Link>
    //         <div className={style.item__content}>
    //           <div className={style.item__colOne}>
    //             <span
    //               className={`${style.item__hash} ${
    //                 restaurant.hash === "Healthy" ? style.item__hashHealthy : ""
    //               } ${
    //                 restaurant.hash === "Trending"
    //                   ? style.item__hashTrending
    //                   : ""
    //               }`}
    //             >
    //               {restaurant.hash}
    //             </span>
    //             <h3 className={style.item__title}>{restaurant.title}</h3>
    //             <div className={style.item__info}>
    //               <div className={style.item__time}>{restaurant.time}min •</div>
    //               <div className={style.item__rating}>
    //                 <EditStar />
    //                 <div>{restaurant.rating}</div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className={style.item__colTwo}>
    //             <div className={style.item__svgWrapper}>
    //               <BookMark />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className={style.restaurant__buttonWrapper}>
    //     <Link href="/restaurants" className={style.restaurant__buttonShowAll}>
    //       <span>View All </span>
    //       <ArrowRight />
    //     </Link>
    //   </div>
    // </section>
  )
}
