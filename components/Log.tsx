import { NotionRenderer, BlockMapType, BaseTextValueType, TweetType, classNames, getTextContent, ContentValueType } from 'react-notion';
import { Fragment } from 'react';
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
            <Fragment key={i}>
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
                      return <TweetEmbed embed={tweetValue.embed || ''} />;
                    },
                    bookmark: ({ blockValue }: { blockValue: any }) => {
                      const link = blockValue.properties.link;
                      const title = blockValue.properties.title ?? [[new URL(link).host]];
                      const description = blockValue.properties.description;

                      const block_color = blockValue.format?.block_color;
                      const bookmark_icon = blockValue.format?.bookmark_icon;
                      const bookmark_cover = blockValue.format?.bookmark_cover;
                      return (
                        <Lazy>
                          <div className='notion-row'>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              className={classNames('notion-bookmark', block_color && `notion-${block_color}`)}
                              href={link[0][0]}
                            >
                              <div>
                                <div className='notion-bookmark-title'>{title}</div>
                                {description && <div className='notion-bookmark-description'>{description}</div>}

                                <div className='notion-bookmark-link'>
                                  {bookmark_icon && <img src={bookmark_icon} alt={getTextContent(title)} />}
                                  <div>{link}</div>
                                </div>
                              </div>
                              {bookmark_cover && (
                                <div className='notion-bookmark-image'>
                                  <img src={bookmark_cover} alt={getTextContent(title)} />
                                </div>
                              )}
                            </a>
                          </div>
                        </Lazy>
                      );
                    },
                  }}
                />
                <Link href='/'>
                  <h3 className='menu'>{'back to top'}</h3>
                </Link>
              </div>
            </Fragment>
          );
        })}
    </>
  );
};
