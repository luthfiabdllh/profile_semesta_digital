// /app/statistics/page.tsx
"use client"

import { useMemo } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { AlertCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useStatisticsData } from "@/hooks/use-statistics-data";
import { getTimelineChartOptions, getPieChartOptions } from "@/lib/chart-options";
import { StatisticsSkeleton } from "@/components/components/StatisticsSkeleton";
import { StatCounterCard } from "@/components/components/statistics/StatCounterCard";
import { ChartCard } from "@/components/components/statistics/ChartCard";
import { NewsArticleCard } from "@/components/components/statistics/NewsArticleCard";

const ReactECharts = dynamic(() => import("echarts-for-react"), { 
  ssr: false,
  loading: () => <div style={{ height: '400px' }} className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg" />
});

export default function StatisticsPage() {
  const { theme, systemTheme } = useTheme();
  const { sentimentData, timelineData, newsData, isLoading, error } = useStatisticsData();

  const isDarkTheme = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
  const labelColor = isDarkTheme ? "#ffffff" : "#000000";
  const borderColor = isDarkTheme ? "#0f172b" : "#ffffff";

  const timelineMasyarakatOptions = useMemo(() => 
    getTimelineChartOptions(timelineData, 'public', labelColor), 
    [timelineData, labelColor]
  );
  const timelineKepolisianOptions = useMemo(() => 
    getTimelineChartOptions(timelineData, 'police', labelColor), 
    [timelineData, labelColor]
  );
  const sentimenMasyarakatOptions = useMemo(() =>
    getPieChartOptions('Sentimen Masyarakat', sentimentData?.sentiment_totals, labelColor, borderColor, 'rose'),
    [sentimentData, labelColor, borderColor]
  );
  const sentimenKepolisianOptions = useMemo(() =>
    getPieChartOptions('Sentimen Kepolisian', sentimentData?.sentiment_polisi_totals, labelColor, borderColor, 'doughnut'),
    [sentimentData, labelColor, borderColor]
  );

  if (isLoading) {
    return <StatisticsSkeleton />;
  }

  if (error) {
    return (
      <main className="container mx-auto py-6 px-4 mt-20">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Terjadi Kesalahan</AlertTitle>
          <AlertDescription>
            Tidak dapat memuat data statistik. Periksa koneksi Anda dan coba lagi.
            <p className="text-xs mt-2 font-mono">{(error as Error).message}</p>
          </AlertDescription>
        </Alert>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-6 px-4 mt-20" aria-labelledby="main-heading">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h1 id="main-heading" className="text-2xl font-bold mb-2">Statistik Data</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Statistika data umum berita terkini sesuai topik pilihan. Meliputi grafik sentimen timeline dan pie chart, serta redaksi berita lengkap.
          </p>
        </CardContent>
      </Card>
      
      <StatCounterCard count={sentimentData?.total_documents} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartCard title={`Timeline Sentimen Masyarakat (${timelineData?.date || 'N/A'})`}>
          <ReactECharts option={timelineMasyarakatOptions} style={{ height: "300px" }} notMerge={true} lazyUpdate={true} />
        </ChartCard>
        <ChartCard title={`Timeline Sentimen Kepolisian (${timelineData?.date || 'N/A'})`}>
          <ReactECharts option={timelineKepolisianOptions} style={{ height: "300px" }} notMerge={true} lazyUpdate={true} />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Sentimen Masyarakat Terkait Berita">
          <ReactECharts option={sentimenMasyarakatOptions} style={{ height: "400px" }} notMerge={true} lazyUpdate={true} />
        </ChartCard>
        <ChartCard title="Sentimen Kepolisian Terkait Berita">
          <ReactECharts option={sentimenKepolisianOptions} style={{ height: "400px" }} notMerge={true} lazyUpdate={true} />
        </ChartCard>
      </div>
      
      <NewsArticleCard newsData={newsData} />
    </main>
  );
}