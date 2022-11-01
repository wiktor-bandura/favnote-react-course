import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, created, twitterName, id }) => (
      <Card
        key={id}
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [
    PropTypes.shape({
      id: 1,
      cardType: 'notes',
      title: 'Hello world',
      content: 'lorem ipsum dolor sit amet',
      twitterName: 'www.youtube.com',
      created: '1 day',
    }),
  ],
};

const MapStateToProps = ({ twitters }) => ({ twitters });

export default connect(MapStateToProps)(Twitters);
