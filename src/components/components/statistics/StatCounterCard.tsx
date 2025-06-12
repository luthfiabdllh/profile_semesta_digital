import { Card, CardContent } from "@/components/ui/card"

interface StatCounterCardProps {
  count?: number; 
}

export function StatCounterCard({ count }: StatCounterCardProps) {
  return (
    <Card className="mb-6">
      <CardContent className="flex flex-col items-center justify-center py-8">
        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">Jumlah Artikel Berita</h2>
        <span className="text-5xl font-bold">
          {count?.toLocaleString() || 0}
        </span>
      </CardContent>
    </Card>
  )
}