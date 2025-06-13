export interface SentimentData {
  total_documents: number;
  sentiment_totals: {
    netral: number;
    positif: number;
    negatif: number;
  };
  sentiment_polisi_totals: {
    netral: number;
    positif: number;
    negatif: number;
  };
}

export interface TimelineData {
  date: string;
  timezone: string;
  hourly_data: Array<{
    hour: string;
    total_documents: number;
    public_sentiment: {
      netral?: number;
      positif?: number;
      negatif?: number;
    };
    police_sentiment: {
      netral?: number;
      positif?: number;
      negatif?: number;
    };
  }>;
}

export interface NewsData {
  link: string;
  media_url: string;
  title: string;
  fulltext: string;
  created: string;
  published: string;
  jenis: string;
}