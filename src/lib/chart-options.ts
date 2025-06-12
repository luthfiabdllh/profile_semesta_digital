// /lib/chart-options.ts
import { TimelineData } from "@/types/productTypes";

// Opsi untuk Timeline Chart
export const getTimelineChartOptions = (
  timelineData: TimelineData | undefined,
  type: 'public' | 'police',
  labelColor: string
) => {
  if (!timelineData) return {}; // Kembalikan objek kosong jika data tidak ada

  const validHours = timelineData.hourly_data.filter(item => item.total_documents > 0);
  const hours = validHours.map(item => item.hour.slice(0, 5));
  
  const sentimentKey = type === 'public' ? 'public_sentiment' : 'police_sentiment';
  const positifData = validHours.map(item => item[sentimentKey]?.positif || 0);
  const netralData = validHours.map(item => item[sentimentKey]?.netral || 0);
  const negatifData = validHours.map(item => item[sentimentKey]?.negatif || 0);

  return {
    grid: { left: "3%", right: "4%", bottom: "15%", containLabel: true },
    xAxis: { type: "category", boundaryGap: false, data: hours, axisLabel: { color: labelColor, fontSize: 10 } },
    yAxis: { type: "value", axisLabel: { color: labelColor } },
    tooltip: { trigger: "axis" },
    legend: { data: ["Positif", "Netral", "Negatif"], textStyle: { color: labelColor, fontSize: 10 }, bottom: 0 },
    series: [
      { name: "Positif", type: "line", smooth: true, data: positifData, itemStyle: { color: "#4169E1" } },
      { name: "Netral", type: "line", smooth: true, data: netralData, itemStyle: { color: "#90EE90" } },
      { name: "Negatif", type: "line", smooth: true, data: negatifData, itemStyle: { color: "#FF6347" } },
    ],
  };
};

// Opsi untuk Pie Chart
export const getPieChartOptions = (
  title: string,
  sentimentTotals: { positif: number; netral: number; negatif: number } | undefined,
  labelColor: string,
  borderColor: string,
  type: 'rose' | 'doughnut'
) => {
  if (!sentimentTotals) return {}; // Kembalikan objek kosong jika data tidak ada

  const isRose = type === 'rose';

  return {
    tooltip: { trigger: "item", formatter: '{a} <br/>{b}: {c} ({d}%)' },
    legend: { bottom: "0%", left: "center", textStyle: { fontSize: 10, color: labelColor } },
    series: [
      {
        name: title,
        type: "pie",
        radius: isRose ? [50, 150] : ["40%", "70%"],
        center: ['50%', '45%'],
        roseType: isRose ? 'area' : undefined,
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: isRose ? 0 : 10,
          borderColor: isRose ? undefined : borderColor,
          borderWidth: isRose ? 0 : 2,
        },
        label: {
          show: isRose,
          position: "outside",
          fontSize: 10,
          color: labelColor,
          formatter: '{b}: {c}'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bold",
            formatter: isRose ? undefined : '{b}\n{c} ({d}%)'
          },
        },
        data: [
          { value: sentimentTotals.positif, name: "Positif", itemStyle: { color: "#4169E1" } },
          { value: sentimentTotals.netral, name: "Netral", itemStyle: { color: "#90EE90" } },
          { value: sentimentTotals.negatif, name: "Negatif", itemStyle: { color: "#FF6347" } },
        ],
      },
    ],
  };
};