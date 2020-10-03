import { NotionRenderer, BlockMapType, BaseTextValueType } from 'react-notion';
import { Fragment } from 'react';
import Link from 'next/link';

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
                <h2>{title}</h2>
                <NotionRenderer blockMap={blockMap} />
                <Link href='/'>
                  <h3 className='menu'>{'back to top'}</h3>
                </Link>
              </div>
              <hr />
            </Fragment>
          );
        })}
    </>
  );
};
