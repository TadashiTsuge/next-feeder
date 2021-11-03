import { FEEDS } from "lib/rss";
import Link from "next/link";
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default function Home() {
  return (
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
  );
}