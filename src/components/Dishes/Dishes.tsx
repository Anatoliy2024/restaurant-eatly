import { dishesList } from "@/data/data"
import { Lists } from "../Lists/Lists"

export function Dishes() {
  const dishes = dishesList.slice(0, 5)
  return (
    <Lists array={dishes} titleViolet="Dishes" type="dishes" href="/dishes" />
  )
}
