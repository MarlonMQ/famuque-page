import { useState, useEffect } from "react"
import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function bem(baseName: string, modifiers: Record<string, boolean>): string {
  return Object.entries(modifiers)
    .filter(([, value]) => value === true)
    .map(([key]) => `${baseName}--${key}`)
    .concat(baseName)
    .reverse()
    .join(" ");
}

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handler) // Cancela si escribe otra letra antes del delay
  }, [value, delay])

  return debouncedValue
}
