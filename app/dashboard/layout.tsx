"use client"

import { Button } from "antd"
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function ReduxLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter()

    return (
      <section className="px-16 py-8">
        <header className="flex items-center justify-center">
            <Button
            type="primary"
            onClick={() => router.push('/dashboard')}>
              Back To Dashboard
            </Button>
        </header>
        {/* <nav></nav> */}
        <Button type="primary">
          <Link href="/dashboard/redux">redux</Link>
        </Button>

        <section className="mt-8">
         {children}
        </section>
      </section>
    )
  }