"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { color } from "framer-motion"

// Dynamically import ECharts components to avoid SSR issues
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false })

export default function StatisticsPage() {
  const { theme, systemTheme } = useTheme() // Get current theme
  const [sentimenMasyarakatOptions, setSentimenMasyarakatOptions] = useState({})
  const [sentimenKepolisianOptions, setSentimenKepolisianOptions] = useState({})
  
  // Determine if dark theme is active
  const isDarkTheme = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  
  // Label color based on theme
  const labelColor = isDarkTheme ? "#ffffff" : "#000"
  const borderColor = isDarkTheme ? "#0f172b" : "#ffffff"
  
  // Line chart options for Timeline Sentimen Masyarakat
  const timelineMasyarakatOptions = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yAxis: {
      type: "value",
      min: 200,
      max: 1200,
    },
    series: [
      {
        name: "Sentimen Masyarakat",
        type: "line",
        smooth: true,
        data: [300, 350, 500, 490, 600, 950, 1100],
        lineStyle: {
          color: "#4169E1",
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#4169E1",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(65, 105, 225, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(65, 105, 225, 0.1)",
              },
            ],
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  }

  // Line chart options for Timeline Sentimen Kepolisian
  const timelineKepolisianOptions = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yAxis: {
      type: "value",
      min: 200,
      max: 1200,
    },
    series: [
      {
        name: "Sentimen Kepolisian",
        type: "line",
        smooth: true,
        data: [280, 380, 480, 520, 580, 920, 1050],
        lineStyle: {
          color: "#4169E1",
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#4169E1",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(65, 105, 225, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(65, 105, 225, 0.1)",
              },
            ],
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  }

  // Pie chart options for Sentimen Masyarakat Terkait Berita
  useEffect(() => {
  const sentimenMasyarakatOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 10,
        color: labelColor,
      },
    },
    series: [
      {
        name: "Sentimen Masyarakat",
        type: "pie",
        radius: [50, 200],
        avoidLabelOverlap: true,
        center: ['50%', '50%'],
        roseType: 'area',
        label: {
          show: true,
          position: "outside",
          fontSize: 10,
          color: labelColor,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bold",
            color: labelColor,
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 20, name: "Isu 1", itemStyle: { color: "#4169E1" } },
          { value: 15, name: "Isu 2", itemStyle: { color: "#90EE90" } },
          { value: 12, name: "Isu 3", itemStyle: { color: "#FFD700" } },
          { value: 10, name: "Isu 4", itemStyle: { color: "#FF6347" } },
          { value: 8, name: "Isu 5", itemStyle: { color: "#87CEEB" } },
          { value: 10, name: "Isu 6", itemStyle: { color: "#3CB371" } },
          { value: 12, name: "Isu 7", itemStyle: { color: "#DA70D6" } },
          { value: 8, name: "Isu 8", itemStyle: { color: "#FF7F50" } },
        ],
      },
    ],
  }
  setSentimenMasyarakatOptions(sentimenMasyarakatOptions)
    
  }, [theme, systemTheme, labelColor])

  // Pie chart options for Sentimen Kepolisian Terkait Berita
    useEffect(() => {
  const sentimenKepolisianOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 10,
        color: labelColor,
      },
    },
    series: [
      {
        name: "Sentimen Kepolisian",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: borderColor,
          borderWidth: 8,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 30, name: "Search Engines", itemStyle: { color: "#4169E1" } },
          { value: 18, name: "Direct", itemStyle: { color: "#90EE90" } },
          { value: 15, name: "Email", itemStyle: { color: "#FFD700" } },
          { value: 12, name: "Union Ads", itemStyle: { color: "#FF6347" } },
          { value: 10, name: "Video Ads", itemStyle: { color: "#87CEEB" } },
        ],
      },
    ],
  }
  setSentimenKepolisianOptions(sentimenKepolisianOptions)
    
  }, [theme, systemTheme, labelColor, borderColor])

  return (
    <main className="container mx-auto py-6 px-4 mt-20" >
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold mb-2">Statistik Data</h1>
          <p className="text-gray-600 text-sm">
            Statistika data umum berita terkini sesuai topik pilihan. Meliputi grafik sentimen timeline dan pie chart,
            serta redaksi berita lengkap.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <h2 className="text-lg font-medium text-gray-500 mb-2">Jumlah Artikel Berita</h2>
          <span className="text-5xl font-bold">18</span>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-center">Timeline Sentimen Masyarakat Berita</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={timelineMasyarakatOptions} style={{ height: "250px" }} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-center">Timeline Sentimen Kepolisian Berita</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={timelineKepolisianOptions} style={{ height: "250px" }} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-center">Sentimen Masyarakat Terkait Berita</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={sentimenMasyarakatOptions} style={{ height: "500px" }} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-center">Sentimen Kepolisian Terkait Berita</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={sentimenKepolisianOptions} style={{ height: "500px" }} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-center">Semua Berita Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=800" alt="Berita terbaru" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-center mb-4">
                  Gandeng YHMCHI, Lab &quot;Pacar&quot; Kembali Gelar Cek Medis Lengkap Bersubsidi
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-2">Source:</span>
                  <Badge variant="outline" className="font-normal">
                    global-news.co.id
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Sentimen Kepolisian: Netral</Badge>
                  <Badge variant="secondary">Sentimen Masyarakat: Positif</Badge>
                  <Badge variant="secondary">Diunggah: 2025-04-27T00:00:00+07:00</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Rekomendasi Tanggapan</Badge>
                  <Badge variant="outline">Ubah Data Sentimen</Badge>
                </div>
                <p className="text-gray-700 text-sm">
                  SURABAYA (global-news.co.id)- Masjid Cheng Ho Surabaya kembali untuk kesekian kalinya menjadi tempat
                  bakti sosial medical check up. Bertempat di Gedung Laboratorium PACAR Surabaya, Yayasan Haji Muhammadi
                  Cheng Ho Indonesia (YHMCHI) kembali mengelar general medical check up selama 2 hari, Sabtu dan Minggu
                  26-27 April 2025. Selama dua hari pemeriksaan kesehatan dimulai pukul 07.00 WIB dan berlangsung hingga
                  pukul 11.00 WIB. Meski dimulai pukul 07.00, namun warga yang ingin mengikuti pemeriksaan kesehatan
                  sudah tiba sebelum dibuka...
                </p>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">
                    Baca Selengkapnya
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
