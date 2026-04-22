import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { Header } from "@/components/shared/header/header"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("*: antialiased", montserrat.className, "font-mono")}
    >
      <body>
        <ThemeProvider>
          <DottedSurface className="size-full" />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none fixed -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
              "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.05),transparent_50%)]",
              "blur-[30px]"
            )}
          />
          <div className="absolute inset-0 flex justify-center">
            <div
              className="container w-full max-w-300 px-4"
              style={{ zIndex: 10, pointerEvents: "auto" }}
            >
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
