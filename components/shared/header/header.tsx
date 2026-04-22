import Link from "next/link"

export function Header() {
  return (
    <header className="pointer-events-auto z-10 flex items-center justify-baseline py-10 font-mono">
      {/*<h2 className="font-heading text-[17px] font-medium">hardworkpaanic</h2>*/}

      <ul className="flex w-full items-center justify-end gap-8">
        <li>
          <Link
            className="font-medium hover:underline dark:text-white/70 dark:hover:text-white"
            href={"/"}
          >
            Портфолио
          </Link>
        </li>
        <li>
          <Link
            className="dark:text-white/70text-white/70 font-medium hover:underline dark:hover:text-white"
            href={"/info"}
          >
            Информация
          </Link>
        </li>

        {/*<Button variant={"outline"} className="text-[14px]" size={"lg"}>
          sign in
        </Button>*/}
      </ul>
    </header>
  )
}
