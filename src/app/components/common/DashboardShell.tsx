"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Spin } from "antd";
import {
  DashboardOutlined,
  CloseOutlined,
  FileTextOutlined,
  LogoutOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: <DashboardOutlined /> },
  { href: "/quotation", label: "Quotation", icon: <FileTextOutlined /> },
  {
    href: "/official-quotation",
    label: "Official Quotation",
    icon: <FileTextOutlined />,
  },
  { href: "/user", label: "User", icon: <UserOutlined /> },
  { href: "/setting", label: "Settings", icon: <SettingOutlined /> },
];

export default function DashboardShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.replace("/login");
    }
  }, [router]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div className="dashboard-header fixed top-0 z-10 flex w-full items-center gap-3 px-4 py-3 md:ps-[280px]">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#285574] hover:bg-blue-50 md:hidden"
        >
          <MenuOutlined className="text-xl" />
        </button>
        <h2 className="text-xl font-bold md:text-2xl">Umrah Quotation</h2>
      </div>

      {isSidebarOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation menu"
          className="fixed inset-0 z-20 bg-slate-950/30 md:hidden"
        />
      )}

      <aside className={isSidebarOpen ? "block" : "hidden md:block"}>
        <div className="sidebar fixed left-0 top-0 z-30 h-screen w-[250px] bg-[#f6f6f6] p-4 shadow-xl md:z-20 md:shadow-none">
          <div className="mb-8 text-center">
            <Image
              className="m-auto"
              width={70}
              height={50}
              src="/images/logo.png"
              alt="FR Travels and Tours"
            />
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close navigation menu"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-[#285574] hover:bg-blue-50 md:hidden"
            >
              <CloseOutlined />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                      active
                        ? "bg-[#285574] text-white"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handleLogout}
            className="absolute bottom-10 flex items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <LogoutOutlined className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="px-4 pt-20 pb-6 md:ps-[280px] md:pe-6">{children}</main>
    </>
  );
}
