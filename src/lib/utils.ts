import { useState, useEffect } from "react"
import { clsx, type ClassValue } from "clsx"
import { toast } from 'react-toastify';

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


export function copyToClipBoard(text: string, type: string = 'Text'): void {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.success(`${type} copiado en el portapapeles`);
    })
    .catch((err) => {
      toast.error(`Failed to copy ${type.toLowerCase()}`);
      console.error('Clipboard error:', err);
    });
}


export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handler) // Cancela si escribe otra letra antes del delay
  }, [value, delay])

  return debouncedValue
}
