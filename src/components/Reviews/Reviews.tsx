import { reviewsList, ReviewType } from "@/data/data"
import style from "./Reviews.module.scss"
import Image from "next/image"
import { Quote } from "@/assets/Quote"
import { Star } from "@/assets/Star"
export function Reviews() {
  reviewsList
  return (
    <div className={style.reviews}>
      <h2>
        <span className="violetColor">Customer</span> Say
      </h2>
      {reviewsList.map((review, i) => (
        <ReviewsItem review={review} key={review.id} />
      ))}
    </div>
  )
}

function ReviewsItem({ review }: { review: ReviewType }) {
  return (
    <div className={style.reviewsItem}>
      <div className={style.reviewsItem__header}>
        <div className={style.reviewsItem__userWrapper}>
          <div className={style.reviewsItem__imageWrapper}>
            <Image
              src={review.image}
              width={71}
              height={71}
              alt={review.username}
            />
          </div>
          <div className={style.reviewsItem__userInfo}>
            <div className={style.reviewsItem__username}>{review.username}</div>
            <div className={style.reviewsItem__withUs}>
              {review.time}Year With Us{" "}
            </div>
          </div>
        </div>
        <div className={style.reviewsItem__quoteWrapper}>
          <Quote />
        </div>
      </div>
      <p className={style.reviewsItem__content}>{review.text}</p>
      <div>
        <StarRating stars={review.stars} />
      </div>
    </div>
  )
}

export function StarRating({ stars }: { stars: number }) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}
