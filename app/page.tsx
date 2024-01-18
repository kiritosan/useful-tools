// 'use client';

import Image from "next/image";
import Link from "next/link";
import { Button, ConfigProvider } from "antd";

import theme from "./theme/themeConfig";

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className="flex flex-col items-center justify-between p-24">
        {/* <Link href="/dashboard">Dashboard</Link> */}
        <Button type="primary">
          <Link href="/dashboard">dashboard</Link>
        </Button>
      </main>
    </ConfigProvider>
  );
}
