import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Lazy } from './Lazy';
export const TwitterCard = ({ id }) => {
  return (
    <Lazy>
      <TwitterTweetEmbed tweetId={id} />
    </Lazy>
  );
}
