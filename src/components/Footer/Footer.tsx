import { Logo } from "@/assets/Logo"
import style from "./Footer.module.scss"
import { navbarList } from "@/data/data"
import Link from "next/link"
import { Instagram } from "@/assets/Instagram"
import { In } from "@/assets/In"
import { Facebook } from "@/assets/Facebook"
import { Twitter } from "@/assets/Twitter"
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__main}>
        <div className={style.footer__logo}>
          <Logo />
          <span className="violetColor">eatly</span>
        </div>
        <ul className={style.footer__navbar}>
          {navbarList.map((elem, i) => (
            <li key={i}>
              <Link href={elem.href}>{elem.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className={style.footer__separator} />
      <div className={style.footer__bottom}>
        <div className={style.footer__copiration}>
          © 2023 EATLY All Rights Reserved.
        </div>
        <div className={style.footer__socialMedia}>
          <Instagram />
          <In />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </footer>
  )
}
