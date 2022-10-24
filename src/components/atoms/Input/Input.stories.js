import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Primary = () => <Input placeholder="Hello" />;
export const Search = () => <Input placeholder="Hello" search />;
