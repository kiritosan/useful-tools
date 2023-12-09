// 'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* <Link href="/dashboard">Dashboard</Link> */}
      <Link href="/redux">redux</Link>
      <Button type="primary">
        Button
      </Button>
    </main>
  )
}
