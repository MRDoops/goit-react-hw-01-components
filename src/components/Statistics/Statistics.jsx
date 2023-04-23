import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  Label,
  Percentage,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

// return (
// 	<StatisticsSection>
// 		{title && <Title>{title}</Title>}

// 		<StatList>
// 			{stats.map(stat => (
// 				<StatItem key={stat.id}>
// 					<Label>{stat.label}</Label>
// 					<Percentage>{stat.percentage}%</Percentage>
// 				</StatItem>
// 			))}
// 		</StatList>
// 	</StatisticsSection>
// );
