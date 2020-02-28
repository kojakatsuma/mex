import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export const TwitterCard = ({id}) => {
  return (
    <TwitterTweetEmbed tweetId={id}/>
  );
}
