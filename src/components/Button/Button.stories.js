import Button from './Button';

export default {
  title: 'Button',
  compoment: Button,
};

export const Primary = () => <Button>Hello Wiktor</Button>;
export const Secondary = () => <Button secondary>Hello</Button>;