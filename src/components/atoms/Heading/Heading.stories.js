import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const Big = () => <Heading>Hello world</Heading>;
export const Small = () => <Heading small>Hello world</Heading>;
