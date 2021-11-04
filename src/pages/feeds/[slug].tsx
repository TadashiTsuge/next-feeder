import { FEEDS, getFeed } from "lib/rss";
import { format } from "date-fns";
import Link from "next/link";
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default function Feed({ feed, items }) {
  return (
    <div className="">
      <div className="">
        <h1 className="">IT RSS Feeds</h1>
        <div className="nav-wrap">
          <div className="scroll-nav">
              <ul>
              {FEEDS.map((feed) => (
                <li key={feed.slug}>
                  <Link href={`/feeds/${feed.slug}`} as={`${publicRuntimeConfig.basePath}/feeds/${feed.slug}`}>
                    <a>
                      {feed.title}
                    </a>
                  </Link>
                </li>
              ))}
              </ul>
          </div>
        </div>
      </div>
      <h2 className="">{feed.title}</h2>
      <div className="article-list">
        <ul>
        {items.map((item, idx) => (
          <li className="article-link" key={idx}>
            <a
              key={item.link}
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="title">{item.title}</div>
              <div className="description">{item.content ? item.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'') : ""}</div>
              <div className="date">{format(new Date(item.isoDate), "yyyy/MM/dd")}</div>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    }
  };
}