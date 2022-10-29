import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card key={id} id={id} cardType="notes" title={title} content={content} created={created} />
    ))}
  </GridTemplate>
);

const MapStateToProps = ({ notes }) => ({ notes });

export default connect(MapStateToProps)(Notes);
