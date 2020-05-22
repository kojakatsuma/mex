
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/7e787aad303a43dd8fa4e6f51cc1ecce').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/4',
      blockMap: data,
    },
  };
}

export default (props: Props) => <Text {...props} />;
