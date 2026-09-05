"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Spin } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  LogoutOutlined,
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

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.replace("/login");
    }
  }, [router]);

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
      <div className="dashboard-header fixed top-0 z-10 w-full px-3 py-4 ps-[280px]">
        <h2 className="text-2xl font-bold">Umrah Quotation</h2>
      </div>

      <aside>
        <div className="sidebar fixed z-20 h-[100vh] w-[250px] bg-[#f6f6f6] p-4">
          <div className="mb-8 text-center">
            <Image
              className="m-auto"
              width={70}
              height={50}
              src="/images/logo.png"
              alt="FR Travels and Tours"
            />
          </div>

          <ul className="flex flex-col gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
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

      <main className="ps-[280px] pt-20 pe-6">{children}</main>
    </>
  );
}
