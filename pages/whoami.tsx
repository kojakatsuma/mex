import { OGPHeader } from '../components/OGPHeader';

const WhoamI =  () => {
  return (
    <>
      <OGPHeader url='/whoami' title={'who am i?'} />
      <h2>name</h2>
      koja
      <h2>job</h2>
      web engineer
      <h2>sns</h2>
      <a className='menu' href='https://twitter.com/keihin194'>
        twitter
      </a>
      <br />
      <a className='menu' href='https://qiita.com/koja1234'>
        Qiita
      </a>
      <br />
      <a className='menu' href='https://soundcloud.com/sokshinbutwo'>
        SoundCloud
      </a>
    </>
  );
};

export default WhoamI
