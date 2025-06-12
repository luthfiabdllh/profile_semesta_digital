// /components/statistics/StatisticsSkeleton.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function StatisticsSkeleton() {
  return (
    <main className="container mx-auto py-6 px-4 mt-20">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <Skeleton className="h-8 w-1/4 mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <Skeleton className="h-6 w-1/3 mx-auto mb-2" />
          <Skeleton className="h-12 w-1/4 mx-auto" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader><Skeleton className="h-5 w-3/4 mx-auto" /></CardHeader>
          <CardContent><Skeleton className="h-[300px] w-full" /></CardContent>
        </Card>
        <Card>
          <CardHeader><Skeleton className="h-5 w-3/4 mx-auto" /></CardHeader>
          <CardContent><Skeleton className="h-[300px] w-full" /></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader><Skeleton className="h-5 w-3/4 mx-auto" /></CardHeader>
          <CardContent><Skeleton className="h-[400px] w-full" /></CardContent>
        </Card>
        <Card>
          <CardHeader><Skeleton className="h-5 w-3/4 mx-auto" /></CardHeader>
          <CardContent><Skeleton className="h-[400px] w-full" /></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><Skeleton className="h-5 w-1/4 mx-auto" /></CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full mb-4" />
          <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}