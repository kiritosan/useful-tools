// 'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* <Link href="/dashboard">Dashboard</Link> */}
      <Button type="primary">
        <Link href="/dashboard/redux">redux</Link>
      </Button>
    </main>
  )
}
