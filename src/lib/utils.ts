import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
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
      toast.success(`${type} copied to clipboard`);
    })
    .catch((err) => {
      toast.error(`Failed to copy ${type.toLowerCase()}`);
      console.error('Clipboard error:', err);
    });
}