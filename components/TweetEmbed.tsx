import { useEffect } from 'react';

export const TweetEmbed: React.FC<{ embed?: string }> = ({ embed }) => {
  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js';
    if (!embed) {
      return;
    }
    if ((window as any)?.twttr?.widgets) {
      (window as any).twttr.widgets.load();
    } else if (!document.querySelector(`script[src="${twitterSrc}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = twitterSrc;
      const body = document.querySelector('body');
      if (body) {
        body.appendChild(script);
      }
    }
  }, [embed]);

  if (!embed) {
    return null;
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 420, width: '100%' }}>
        <div dangerouslySetInnerHTML={{ __html: embed.split('<script')[0] }} />
      </div>
    </div>
  );
};
