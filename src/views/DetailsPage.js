import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../routes';
import DetailsTemplate from '../templates/DetailsTemplate';

const DetailsPage = () => {
  const { pathname } = useLocation();
  const pageType = pathname.split('/')[1];

  const example = {
    title: `Hello Wiktor You're the best`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque dignissim
    convallis. Fusce ac nisl id tellus congue tempor. Nulla scelerisque placerat iaculis.
    Etiam rhoncus nisi vitae enim venenatis, eu rhoncus ligula vulputate. Proin velit eros,
    tempor vel rutrum at, tincidunt a odio. Quisque eu purus sit amet nibh luctus ornare. Ut
    enim ipsum, tincidunt a augue eu, sagittis efficitur ipsum. Phasellus convallis porttitor
    eros ac suscipit. Mauris sollicitudin libero in ex gravida, a porttitor arcu ullamcorper.
    In varius pellentesque lacus, eget tempus neque sollicitudin vel. Pellentesque ac lectus
    sem. Pellentesque viverra, sapien eu feugiat ultrices, nibh felis laoreet nunc, quis
    sagittis odio felis fermentum ex. Suspendisse dictum lacus sit amet iaculis lacinia. Nulla
    eget odio malesuada purus fermentum ornare volutpat eget dui. Etiam varius nec velit eget
    tincidunt. Donec massa nibh, vehicula non sem quis, tempor eleifend justo. Ut euismod
    fringilla eleifend. Nullam accumsan congue dui eget posuere. Vestibulum commodo dignissim
    mauris ut vulputate. Integer et dignissim augue, nec eleifend elit. Nunc fermentum ex leo,
    et posuere odio posuere et.`,
    twitterURL:
      'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
    articleURL: 'http://www.fskorusa.archidiecezja.wroc.pl',
    created: '1 day ago',
  };

  return (
    <DetailsTemplate
      pageType={pageType}
      title={example.title}
      content={example.content}
      twitterURL={example.twitterURL}
      articleURL={example.articleURL}
      crated={example.created}
    />
  );
};

export default DetailsPage;
