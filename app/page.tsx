import { ResumeCard } from "@/components/shared/resume-card"

export default function Page() {
  return (
    <main className="flex size-full justify-start">
      {/*<div className="flex h-[300px] gap-10">
        <Image src="/avatar.png" width={"300"} height={300} alt="" />

        <div className="*: mt-10 flex flex-col items-start">
          <h1 className="font-heading text-[60px] font-bold">hardworkpaanic</h1>
          <span className="text-gray-700 dark:text-gray-300">
            FullStack Devoloper
          </span>

          <Button>Связаться</Button>
        </div>
      </div>*/}

      <ResumeCard />
    </main>
  )
}
