import { NotionRenderer, BlockMapType, BaseTextValueType } from 'react-notion-dev';
import { OGPHeader } from './OGPHeader';
import { fmtDateTime } from '../utils/index';
import { useRouter } from 'next/router';
import { TweetEmbed } from './TweetEmbed';
export interface Props {
  url: string;
  blockMap: BlockMapType;
}

export const Text = ({ blockMap, url }: Props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>...Loading</div>;
  }
  const { created_time, last_edited_time, properties: titleprops } = Object.values(blockMap)[0]
    .value as BaseTextValueType;

  const metaDescription = Object.values(blockMap)
    .filter(({ value }) => value.type === 'text')
    .map(({ value }) => value.properties?.title[0][0])
    .join('');

  const title = titleprops?.title[0][0] || '';
  return (
    <>
      <OGPHeader url={url} title={title} metaDescription={metaDescription} />
      <h1 className='notion-h1'>{title}</h1>
      <p>
        Created: {fmtDateTime(created_time)}
        <br />
        Last Edited: {fmtDateTime(last_edited_time)}
      </p>
      <NotionRenderer
        blockMap={blockMap}
        customBlockComponents={{
          tweet: ({ blockValue }) => {
            const path = blockValue.properties.source[0][0] as string;
            return <TweetEmbed tweetUrl={path} />;
          },
        }}
      />
    </>
  );
};
