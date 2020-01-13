import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from './components/Loading'
import styled from 'styled-components/macro'

const Users = Loadable({
  loader: () => import('./scenes/Users'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import('./scenes/About'),
  loading: Loading
})

const Home = Loadable({
  loader: () => import('./scenes/Home'),
  loading: Loading
})

function App() {
  return (
    <Router>
      <Container>
        <MainNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </MainNav>
        <SceneWrapper>
          <Switch>
            <Route 
              path="/users"
              render={(props) => <Users {...props} />} />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SceneWrapper>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
`
const MainNav = styled.nav`
  height: 100vh;
  background: #dadada;
  padding: 0 1rem;

`;
const SceneWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export default App;
