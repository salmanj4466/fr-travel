"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, message } from "antd";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    // Hard-coded credentials
    if (email === "admin@gmail.com" && password === "raja786") {
      // Save login state
      localStorage.setItem("isLoggedIn", "true");

      message.success("Login successful!");

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      message.error("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <section className="login-bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a
              href="#"
              className="flex items-center mb-10 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                className="m-auto"
                width={80}
                height={50}
                src="/images/logo.png"
                alt="logo"
              />
            </a>

            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-base font-medium text-black"
                >
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  size="large"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-base font-medium text-black"
                >
                  Password
                </label>

                <Input.Password
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  size="large"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Button */}
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={loading}
              >
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
