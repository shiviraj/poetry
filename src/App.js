import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <SearchAppBar />
    </ThemeProvider>
  </div>
);

export default App;
