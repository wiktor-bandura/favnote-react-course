import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const cardNormal = () => <Card />;
export const cardSec = () => <Card cardType="twitter" />;
export const cardTert = () => <Card cardType="article" />;
