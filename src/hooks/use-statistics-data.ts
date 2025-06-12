// /hooks/use-statistics-data.ts
"use client"

import useSWR from 'swr';
import { SentimentData, TimelineData, NewsData } from '@/types/productTypes';

interface FetchError extends Error {
  info?: unknown;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL 

const SENTIMENT_API_URL = `${API_BASE_URL}/search/sentiment-analysis`;
const TIMELINE_API_URL = `${API_BASE_URL}/search/timeline`;
const NEWS_API_URL = `${API_BASE_URL}/search/news-details`;

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    mode: 'cors'
  });
  if (!res.ok) {
    const errorInfo = await res.json().catch(() => ({}));
    const error: FetchError = new Error(`Gagal mengambil data dari ${url}. Status: ${res.status}`);
    error.info = errorInfo;
    throw error;
  }
  return res.json();
};

export function useStatisticsData() {
  const { data: sentimentData, error: sentimentError } = useSWR<SentimentData>(SENTIMENT_API_URL, fetcher);
  const { data: timelineData, error: timelineError } = useSWR<TimelineData>(TIMELINE_API_URL, fetcher);
  const { data: newsData, error: newsError } = useSWR<NewsData>(NEWS_API_URL, fetcher);

  const combinedError = sentimentError || timelineError || newsError;
  const isLoading = !sentimentData && !timelineData && !newsData && !combinedError;

  return {
    sentimentData,
    timelineData,
    newsData,
    isLoading,
    error: combinedError,
  };
}