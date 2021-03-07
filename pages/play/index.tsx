import dynamic from 'next/dynamic';
const PlayInDuration = dynamic(() => import('../../components/play/PlayInDuration'), { ssr: false });

const Play = () => {
  return (
    <>
      <PlayInDuration />
    </>
  );
};

export default Play;
