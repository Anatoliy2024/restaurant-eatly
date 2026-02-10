import { Logo } from "@/assets/Logo"
import style from "./Header.module.scss"
import { navbarList } from "@/data/data"
import Link from "next/link"
import { ButtonUi } from "@/ui/ButtonUi/ButtonUi"
export function Header() {
  return (
    <section className={style.header}>
      <div className={style.header__content}>
        <div className={style.header__logo}>
          <Logo />
          <div>eatly</div>
        </div>

        <div className={style.header__main}>
          <ul className={style.header__navbar}>
            {navbarList.map((elem, i) => (
              <li key={i}>
                <Link href={elem.href}>{elem.title}</Link>
              </li>
            ))}
          </ul>

          <div className={style.header__auth}>
            <ButtonUi text="Login" href="/login" />
            <ButtonUi text="Sign up" type="violet" href="/auth" />
          </div>
        </div>
      </div>
      <hr className={style.header__separator} />
    </section>
  )
}
