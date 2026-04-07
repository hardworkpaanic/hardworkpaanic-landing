import Link from "next/link"

export function Header() {
  return (
    <header className="pointer-events-auto z-10 flex items-center justify-baseline py-10 font-mono">
      {/*<h2 className="font-heading text-[17px] font-medium">hardworkpaanic</h2>*/}

      <ul className="flex w-full items-center justify-end gap-4">
        <li>
          <Link className="font-medium hover:underline" href={"#"}>
            home
          </Link>
        </li>
        <li>
          <Link className="font-medium hover:underline" href={"#"}>
            portfolio
          </Link>
        </li>
      </ul>
    </header>
  )
}
