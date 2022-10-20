import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';

const App = () => (
  <GlobalStyle>
    <h1>Hello Wiktor</h1>
    <Button>Close/Save</Button>
    <Button secondary>Remove</Button>
  </GlobalStyle>
);

export default App;
