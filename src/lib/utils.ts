import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// /lib/utils.ts

export const extractTitle = (fulltext: string): string => {
  if (!fulltext) return "Judul Berita Tidak Tersedia";
  const firstSentence = fulltext.split(/[.!?]/)[0].trim();
  if (firstSentence.length > 100) {
    return `${firstSentence.substring(0, 100)}...`;
  }
  return firstSentence || "Berita Terbaru";
};

export const extractDomain = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch {
    return 'unknown-source.com';
  }
};

export const formatDate = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return "Tanggal tidak valid";
  }
};

export const truncateText = (text: string, maxLength: number = 300): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};