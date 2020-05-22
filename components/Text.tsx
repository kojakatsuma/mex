import { NotionRenderer, BlockMapType, BaseTextValueType } from 'react-notion';
import { OGPHeader } from './OGPHeader';
import { fmtDateTime } from '../utils/index';

export interface Props {
  url: string,
  metaDescription: string;
  blockMap: BlockMapType;
}

export const Text = ({ blockMap, url }: Props) => {
  const { created_time, last_edited_time, properties: titleprops } = Object.values(blockMap)[0]
    .value as BaseTextValueType;

  const { properties } = Object.values(blockMap)[1].value as BaseTextValueType;
  const metaDescription = properties?.title[0][0]

  const title = titleprops?.title[0][0] || '';
  return (
    <>
      <OGPHeader url={url} title={title} metaDescription={metaDescription} />
      <h1 className='notion-h1'>{title}</h1>
      <p>
        Created: {fmtDateTime(created_time)}, Last Edited: {fmtDateTime(last_edited_time)}{' '}
      </p>
      <NotionRenderer blockMap={blockMap} />
    </>
  );
};
