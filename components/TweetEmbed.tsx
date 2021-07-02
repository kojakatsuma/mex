import { useEffect, useRef, useState } from 'react';
import { useScroll } from './Lazy';

export const TweetEmbed: React.FC<{ embed?: string }> = ({ embed }) => {
  const target = useRef<HTMLDivElement>(null);
  const renderStart = useScroll(target);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const twitterSrc = 'https://platform.twitter.com/widgets.js';
    if (!embed || !renderStart) {
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
    setLoading(false);
  }, [embed, renderStart]);

  if (!embed) {
    return null;
  }
  const style = loading
    ? { display: 'flex', opacity: 0.2 }
    : { display: 'flex', opacity: 1, transition: 'all 1s', WebkitTransition: 'all 1s' };
  
  return (
    <div ref={target} style={style}>
      <div style={{...{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 420, width: '100%' }}}>
        <div dangerouslySetInnerHTML={{ __html: embed.split('<script')[0] }} />
      </div>
    </div>
  );
};
