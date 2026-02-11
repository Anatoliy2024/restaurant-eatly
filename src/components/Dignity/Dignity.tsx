import Image from "next/image"
import style from "./Dignity.module.scss"
import { ArrowVectorTwo } from "@/assets/ArrowVectorTwo"
import { VectorThree } from "@/assets/VectorThree"
import { ButtonUi } from "@/ui/ButtonUi/ButtonUi"
import { ArrowVectorOne } from "@/assets/ArrowVectorOne"
export function Dignity() {
  return (
    <section className={style.dignity}>
      <div className={style.dignity__imageContainer}>
        <div className={style.dignity__imageWrapper}>
          <Image src="/phone.png" width={304} height={609} alt="phone" />
          <div className={style.dignity__VectorThreeWrapper}>
            <VectorThree />
          </div>
        </div>
      </div>
      <div className={style.dignity__content}>
        <h2>
          Premium <span className="violetColor">Quality</span> <br />
          For Your Health
        </h2>
        <ul>
          <li>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>
        <div className={style.dignity__buttonWrapper}>
          <ButtonUi text="Download" type="violet" />
          <div className={style.dignity__arrowWrapper}>
            <ArrowVectorOne />
          </div>
        </div>
      </div>
    </section>
  )
}
