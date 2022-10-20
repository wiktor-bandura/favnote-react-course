import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Wiktor</h1>
        <Button>Close/Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default App;
