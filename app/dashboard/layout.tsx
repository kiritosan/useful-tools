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

        <nav className="px-24 my-4">
          <Button type="primary">
            <Link href="/dashboard/redux">redux</Link>
          </Button>
        </nav>

        <section>
         {children}
        </section>
      </section>
    )
  }