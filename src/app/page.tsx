import { Dignity } from "@/components/Dignity/Dignity"
import { Enjoy } from "@/components/Enjoy/Enjoy"
import { Statistics } from "@/components/Statistics/Statistics"
import InnerApp from "@/providers/InnerApp"

export default function Home() {
  return (
    <InnerApp>
      <Enjoy />
      <Statistics />
      <Dignity />
    </InnerApp>
  )
}
