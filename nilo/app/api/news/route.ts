import { NextResponse } from "next/server";
import xml2js from "xml2js";

export async function GET() {
  try {
    // Example: Kuensel RSS feed (replace with actual URL)
    const rssUrl = "https://kuensel.com/feed/";
    const response = await fetch(rssUrl);
    const xml = await response.text();

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xml);

    const items = result.rss.channel[0].item.slice(0, 3).map((item: any) => ({
      title: item.title[0],
      excerpt: item.description[0].replace(/<[^>]*>/g, "").substring(0, 150),
      date: new Date(item.pubDate[0]).toLocaleDateString(),
      category: "News",
      link: item.link[0],
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json([]);
  }
}
