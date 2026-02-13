"use client"
import { reviewsList, ReviewType } from "@/data/data"
import style from "./Reviews.module.scss"
import Image from "next/image"
import { Quote } from "@/assets/Quote"
import { Star } from "@/assets/Star"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar } from "swiper/modules" // <-- правильно

export function Reviews() {
  return (
    <div className={style.reviews}>
      <h2>
        <span className="violetColor">Customer</span> Say
      </h2>
      <div className={style.slider}>
        <button className={style.slider__myPrev}>Назад</button>
        <button className={style.slider__myNext}>Вперёд</button>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={20} // расстояние между слайдами
          slidesPerView={4} // сколько элементов видно сразу
          // navigation
          navigation={{
            nextEl: `.${style.slider__myNext}`,
            prevEl: `.${style.slider__myPrev}`,
          }}
          // стрелки
          // pagination={{ clickable: true, el: `.${style.slider__pagination}` }} // точки под слайдером
          scrollbar={{
            el: `.${style.slider__scrollbar}`,
            draggable: true,
          }}
          className={style.slider__mySwiper}
        >
          {reviewsList.map((review) => (
            <SwiperSlide key={review.id} className={style.slider__mySlide}>
              <ReviewsItem review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* {reviewsList.map(review => (
        <ReviewsItem review={review} key={review.id} />
      ))} */}
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
