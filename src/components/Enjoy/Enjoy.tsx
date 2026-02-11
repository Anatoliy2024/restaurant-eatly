import { ButtonUi } from "@/ui/ButtonUi/ButtonUi"
import style from "./Enjoy.module.scss"
import { EditStar } from "@/assets/EditStar"
import Image from "next/image"
import { VectorOne } from "@/assets/VectorOne"
import { VectorTwo } from "@/assets/VectorTwo"
import { Star } from "@/assets/Star"
import { ArrowVectorOne } from "@/assets/ArrowVectorOne"
import { ArrowVectorTwo } from "@/assets/ArrowVectorTwo"
export function Enjoy() {
  return (
    <section className={style.enjoy}>
      <div className={style.enjoy__content}>
        <div className={style.enjoy__hash}>OVER 1000 USERS</div>
        <h2 className={style.enjoy__title}>
          Enjoy Foods All Over The <span className="violetColor">World</span>
        </h2>
        <p className={style.enjoy__text}>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span className="violetColor">$20 bonus</span>.
        </p>
        <div className={style.enjoy__buttons}>
          <ButtonUi text="Get Started" href="#" type="violet" />
          <ButtonUi text="Go Pro" href="#" type="violetTwo" />
        </div>
        <div className={style.enjoy__rating}>
          <div className={style.enjoy__ratingStarGreen}>
            <Star />
          </div>
          <div className={style.enjoy__ratingCompany}>Trustpilot</div>
          <div className={style.enjoy__ratingStars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <div className={style.enjoy__ratingSub}>4900+</div>
        </div>
      </div>
      <div className={style.enjoy__imageContent}>
        <div className={style.enjoy__imageOne}>
          <Image
            src="/food-image(1).png"
            width={429}
            height={443}
            alt="food-image"
          />
          <ArrowVectorTwo />
        </div>

        <div className={style.enjoy__imageTwo}>
          <Image
            src="/food-image(3).png"
            width={328}
            height={90}
            alt="food-image"
          />
          <VectorOne />
        </div>
        <div className={style.enjoy__imageThree}>
          <Image src="/Graph.png" width={207} height={205} alt="graph" />
          <VectorTwo />
        </div>
      </div>
    </section>
  )
}
