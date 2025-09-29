import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case 'deployed':
    case 'live':
    case 'active':
      return 'text-green-600 bg-green-50'
    case 'building':
    case 'deploying':
      return 'text-blue-600 bg-blue-50'
    case 'failed':
    case 'error':
      return 'text-red-600 bg-red-50'
    case 'pending':
    case 'queued':
      return 'text-yellow-600 bg-yellow-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}