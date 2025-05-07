"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative w-14 h-7 rounded-full overflow-hidden border-2 border-gray-300 shadow-inner transition-all duration-500 ease-in-out"
      )}
    >
      {/* Background Image */}
      <div
        className={clsx(
          "absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
        )}
      >
        <Image
          src={isDark ? "/dark.png" : "/light.png"}
          alt="Sky background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
      </div>
    </button>
  )
}
