import Parser from "rss-parser";

export const FEEDS = [
  {
    slug: "gihyo.jp",
    title: "技術評論社",
    url: "https://gihyo.jp/feed/rss2",
  },
  {
    slug: "CodeZine",
    title: "CodeZine",
    url: "https://codezine.jp/rss/new/20/index.xml",
  },
  {
    slug: "@IT",
    title: "@IT",
    url: "https://rss.itmedia.co.jp/rss/2.0/ait.xml",
  },
  {
    slug: "ITmedia",
    title: "ITmedia",
    url: "https://rss.itmedia.co.jp/rss/2.0/itmedia_all.xml",
  },
  {
    slug: "srad",
    title: "スラド",
    url: "https://srad.jp/sradjp.rss",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);
  return feed;
}

