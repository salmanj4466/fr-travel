"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Spin } from "antd";
import Link from "next/link";
import Image from "next/image";
import {
  DashboardOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Quotation from "../quotation/page";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };

  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div className="ps-[280px] fixed top-0 w-full dashboard-header py-4 px-3">
        <h2 className="text-2xl font-bold">Umrah Quotation</h2>
      </div>
      <aside>
        <div className="w-[250] h-[100vh] fixed bg-[#f6f6f6] sidebar p-4">
          <div className="text-center mb-8">
            <Image
              className="m-auto"
              width={70}
              height={50}
              src="/images/logo.png"
              alt="logo"
            />
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-[#285574] px-4 py-3 text-white"
              >
                <DashboardOutlined className="text-lg" />
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#6ccef5] hover:bg-blue-50 hover:text-blue-[#285574]"
              >
                <FileTextOutlined className="text-lg text-[#6ccef5]" />
                <span>Quotation</span>
              </Link>
            </li>

            <li>
              <Link
                href="/user"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <UserOutlined className="text-lg" />
                <span>User</span>
              </Link>
            </li>

            <li>
              <Link
                href="/setting"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                <SettingOutlined className="text-lg" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-10">
            <Link
              href="/"
              onClick={handleLogout}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <LogoutOutlined className="text-lg" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="ps-[280px] pt-20 pe-6">
        <Quotation />
      </div>
    </>
  );
};

export default Dashboard;
