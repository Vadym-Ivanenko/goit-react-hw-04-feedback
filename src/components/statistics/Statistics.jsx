import { List, Items } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Items>Good: {good}</Items>
      <Items>Neutral: {neutral}</Items>
      <Items>Bad: {bad}</Items>
      <Items>Total: {total}</Items>
      <Items>Positive feedback: {positivePercentage}%</Items>
    </List>
  );
};
