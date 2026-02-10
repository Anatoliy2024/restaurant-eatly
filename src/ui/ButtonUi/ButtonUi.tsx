import Link from "next/link"
import style from "./ButtonUi.module.scss"
export function ButtonUi({
  text,
  type,
  href,
}: {
  text: string
  type?: string
  href?: string
}) {
  return (
    <button>
      <Link
        className={`${style.buttonUi}  ${type ? style[type] : ""}`}
        href={href ? href : "#"}
      >
        {text}
      </Link>
    </button>
  )
}
