// /components/statistics/NewsArticleCard.tsx
"use client"

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Calendar, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsData } from "@/types/productTypes";
import { extractTitle, extractDomain, formatDate, truncateText } from "@/lib/utils";
import Link from "next/link";

interface NewsArticleCardProps {
  newsData?: NewsData;
}

export function NewsArticleCard({ newsData }: NewsArticleCardProps) {
  const [showFullText, setShowFullText] = useState(false);

  if (!newsData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-center">Berita Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p>Berita terbaru tidak tersedia.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const title = extractTitle(newsData.fulltext);

  return (
    <section aria-labelledby="berita-terbaru">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-center" id="berita-terbaru">
            Berita Terbaru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <article className="border rounded-lg overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={newsData.media_url || "/placeholder.svg"}
                alt={`Gambar berita: ${title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Globe className="w-4 h-4 mr-1" />
                <span className="mr-2">Sumber:</span>
                <Badge variant="outline">{extractDomain(newsData.link)}</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Jenis: {newsData.jenis}</Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  Diterbitkan: {formatDate(newsData.published)}
                </Badge>
                <Badge variant="secondary">
                    <Calendar className="w-3 h-3 mr-1" />
                    <time dateTime={newsData.created}>
                        Dibuat: {formatDate(newsData.created)}
                    </time>
                </Badge>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {showFullText ? (
                  <div className="whitespace-pre-wrap">{newsData.fulltext}</div>
                ) : (
                  <div>{truncateText(newsData.fulltext)}</div>
                )}
              </div>
              <div className="flex justify-end items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowFullText(!showFullText)}>
                  {showFullText ? "Sembunyikan" : "Baca Selengkapnya"}
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={newsData.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Sumber Asli
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </CardContent>
      </Card>
    </section>
  );
}