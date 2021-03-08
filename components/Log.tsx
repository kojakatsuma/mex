import { NotionRenderer, BlockMapType, BaseTextValueType, TweetType } from 'react-notion';
import Link from 'next/link';
import { TweetEmbed } from './TweetEmbed';
import { Lazy } from './Lazy';

export const Log: React.FC<{ blockMaps: BlockMapType[] }> = ({ blockMaps }) => {
  return (
    <>
      {blockMaps
        .sort((a, b) => {
          const pre = Object.values(a)[0].value as BaseTextValueType;
          const post = Object.values(b)[0].value as BaseTextValueType;
          return post.created_time - pre.created_time;
        })
        .map((blockMap, i) => {
          const { properties: titleprops } = Object.values(blockMap)[0].value as BaseTextValueType;
          const title = titleprops?.title[0][0] || '';
          return (
            <Lazy key={i}>
              <div className='log-text'>
                <h2 id={title}>
                  <a href={`#${title}`} className='inactive-link'>
                    {title}
                  </a>
                </h2>
                <NotionRenderer
                  blockMap={blockMap}
                  customBlockComponents={{
                    tweet: ({ blockValue }) => {
                      const tweetValue = blockValue as TweetType;
                      return <TweetEmbed embed={tweetValue.embed} />;
                    },
                  }}
                />
                <Link href='/'>
                  <h3 className='menu'>{'back to top'}</h3>
                </Link>
              </div>
            </Lazy>
          );
        })}
    </>
  );
};
