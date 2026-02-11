import { VectorFour } from "@/assets/VectorFour"
import style from "./Statistics.module.scss"
import { VectorFive } from "@/assets/VectorFive"
export function Statistics() {
  return (
    <section className={style.statistics}>
      <div className={style.statistics__vectorFour}>
        <VectorFour />
      </div>
      <div className={style.statistics__content}>
        <div className={style.statistics__col}>
          <h3>10K+</h3>
          <p>
            Satisfied Costumers <br /> All Great Over The World
          </p>
        </div>
        <div className={style.statistics__col}>
          <h3>4M</h3>
          <p>
            Healthy Dishes Sold <br /> Including Milk Shakes Smooth
          </p>
        </div>
        <div className={style.statistics__col}>
          <h3>99.99%</h3>
          <p>
            Reliable Customer Support <br /> We Provide Great Experiences
          </p>
        </div>
      </div>

      <div className={style.statistics__vectorFive}>
        <VectorFive />
      </div>
    </section>
  )
}
