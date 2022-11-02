import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import { withRouter } from '../withrouter/withRouter';
import PageContext from '../context';

class MainTemplate extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.checkCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.checkCurrentPage(prevState);
  }

  checkCurrentPage(prevState = '') {
    const pageTypes = ['twitters', 'articles', 'notes'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    console.log(currentPage);

    if (prevState.pageType !== currentPage) {
      this.setState({
        pageType: currentPage,
      });

      console.log(this.state);
    }
  }

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
