import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import withContext from '../HOC/withContext';

const Twitters = ({ twitters, pageContext }) => (
  <GridTemplate pageType={pageContext}>
    {twitters.map(({ title, content, created, twitterName, id }) => (
      <Card
        key={id}
        id={id}
        cardType={pageContext}
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
      />
    ))}
  </GridTemplate>
);

const MapStateToProps = ({ twitters }) => ({ twitters });

export default connect(MapStateToProps)(withContext(Twitters));
