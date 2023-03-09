import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import Comp1 from "@/components/Comp1"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline leading-loose">
          You can use Tailwind
        </h1>
        <p>index.js</p>
        <Link href="/about">Go to About Page</Link>
        <Link href="/news">Go to News Page</Link>
        <Link href="/books">為替レートへ</Link>
        <Comp1 />
      </main>
    </>
  )
}
