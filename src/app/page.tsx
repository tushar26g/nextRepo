"use client";

import Link from "next/link";

// import { ThemeContext } from "@/context/ThemeContext";
// import { useContext } from "react";

export default function Home() {
  // const themeContext = useContext(ThemeContext);
  // if (!themeContext) return null;

  // const { theme } = themeContext;

  return (
    <>
      <div>
        <Link href={"/qPapersTable/bus_ecom"}>click me</Link>
      </div>
      <div>
        <Link href={"/qPapersTable/bus_ecom_copy"}>click me again</Link>
      </div>
    </>
  );
}
