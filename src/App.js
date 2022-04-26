import React from 'react';
import './assets/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import '@fontsource/oswald';
import '@fontsource/quattrocento';
import NavBar from './components/NavBar';
import IndexPage from './components/IndexPage';
import TodoPage from './components/TodoPage';
import SpecReport from './components/SpecReport';
import DesignReport from './components/DesignReport';
import LowDesignReport from './components/LowDesignReport';
import AnalysisReport from './components/AnalysisReport';
import TestPlanReport from './components/TestPlanReport';

const theme = extendTheme({
  colors: {
    app: {
      white: '#f1f1f1',
      pink: '#ef3666',
      lightPink: '#fec0c6',
      blue: '#4776E6',
      grey: '#463c56',
      lightgrey: '#9c95a1',
      black: '#2d2c3f',
    },
  },
  fonts: {
    heading: 'Oswald',
    body: 'Quattrocento',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router history={history}>
        <Box bg="app.black" w="100vw" h="100vh" style={{ overflowX: 'hidden' }}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/todos" exact component={TodoPage} />
            <Route path="/specreport" exact component={SpecReport} />
            <Route path="/designreport" exact component={DesignReport} />
            <Route path="/lowdesignreport" exact component={LowDesignReport} />
            <Route path="/analysisreport" exact component={AnalysisReport} />
            <Route path="/testplanreport" exact component={TestPlanReport} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
