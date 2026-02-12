import { Dignity } from "@/components/Dignity/Dignity"
import { Dishes } from "@/components/Dishes/Dishes"
import { Enjoy } from "@/components/Enjoy/Enjoy"
import { Restaurant } from "@/components/Restaurant/Restaurant"
import { Reviews } from "@/components/Reviews/Reviews"
import { Statistics } from "@/components/Statistics/Statistics"
import InnerApp from "@/providers/InnerApp"

export default function Home() {
  return (
    <InnerApp>
      <Enjoy />
      <Statistics />
      <Dignity />
      <hr className="separator" />
      <Restaurant />
      <hr className="separator" />
      <Dishes />
      <hr className="separator" />
      <Reviews />
    </InnerApp>
  )
}
