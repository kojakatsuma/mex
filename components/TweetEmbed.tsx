import { Tweet } from 'react-twitter-widgets';

export const TweetEmbed: React.FC<{ tweetUrl: string; }> = ({ tweetUrl }) => {
  const tweetId = tweetUrl.match(/([^\/.]+)$/g)?.pop();
  if (!tweetId) {
    return null;
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 420, width: '100%' }}>
        <Tweet tweetId={tweetId} />
      </div>
    </div>
  );
};
