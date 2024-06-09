"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Top() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/page/login");
    }
  }, [router]);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  function componentDidMount() {
    const elements = document.getElementsByClassName("menu");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("hidden")) {
        elements[i].classList.remove("hidden");
      } else {
        elements[i].classList.add("hidden");
      }
    }
  }
  return (
    <div className="bg-gray-900 text-slate-50">
      <div>
        <header className="py-6 mx-10 uppercase bg-gray-900 ">
          <nav className=" flex flex-row justify-between items-center">
            <div className=" logo  basis-2/6 text-center font-semibold cursor-pointer">
              <Link href="/" className="hover-Item">
                MY ANIME
              </Link>
            </div>
            <ul className=" hidden lg:basis-3/6 lg:flex lg:items-center lg:justify-end gap-8">
              <li>
                <Link href="/" className="hover-Item">
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link href="/page/listanime" className="hover-Item">
                  DANH SÁCH
                </Link>
              </li>
              <li>
                <Link href="" className="hover-Item">
                  THỂ LOẠI
                </Link>
              </li>

              <li>
                <Link href="/page/about" className="hover-Item">
                  GIỚI THIỆU
                </Link>
              </li>
            </ul>
            <ul className=" hidden lg:basis-1/6  lg:flex lg:justify-end lg:items-center mx-4">
              <span className="material-symbols-outlined mx-1">search</span>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
              />
              <input placeholder="Tìm Kiếm" className=" rounded-2xl border-4" />
            </ul>
            <ul className="w-[150px]  px-2">
              {isLoggedIn ? (
                <span>
                  <p>Đăng Xuất</p>
                  <button onClick={handleLogout}>Logout</button>
                </span>
              ) : (
                <p className="w-[150px]  px-2">Đăng Nhập</p>
              )}
            </ul>
            <div className="lg:hidden">
              <button onClick={() => componentDidMount()} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </nav>

          <nav className="   rounded-xl uppercase menu hidden flex   px-4">
            <ul className="w-[100%] text-center">
              <li className="p-2">
                <Link href="/" className="hover-Item ">
                  TRANG CHỦ
                </Link>
              </li>
              <li className="p-2">
                <Link href="/page/listanime" className="hover-Item">
                  DANH SÁCH
                </Link>
              </li>
              <li className="p-2">
                <Link href="/page/about" className="hover-Item">
                  GIỚI THIỆU
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
