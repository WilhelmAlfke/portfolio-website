"use client"; // this is a client component
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "styled-components";
import { IoMoMenu, IoMdClose } from "react-ionicons";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href={"/"} aria-label="Navigate to home">
          home
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 lowercase hover:border-b text-xl">home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 lowercase hover:border-b text-xl">about</li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 lowercase hover:border-b text-xl">blog</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 lowercase hover:border-b text-xl">
                projects
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 lowercase hover:border-b text-xl">
                let's talk
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                about
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                blog
              </li>
            </Link>
            <Link href="/projects">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                projects
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                let's talk
              </li>
            </Link>
          </ul>
        </div>
        <section className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
        </section>
      </div>
    </nav>
  );
}
