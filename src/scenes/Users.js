import React from 'react'
import { Link, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'
import styled from 'styled-components/macro'

const UsersDefault = Loadable({
    loader: () => import('./users-screens/UsersDefault'),
    loading: Loading
})

const UsersA = Loadable({
    loader: () => import('./users-screens/UsersA'),
    loading: Loading
})

const UsersB = Loadable({
    loader: () => import('./users-screens/UsersB'),
    loading: Loading
})

const subdomainRoutes = [
    {
        title: 'UsersDefault',
        route: '/users'
    },
    {
        title: 'A',
        route: '/users/a'
    },
    {
        title: 'B',
        route: '/users/b'
    }
];

class Users extends React.Component {
    render(){
        return (
            <div>
                <h2>Users</h2>
                <SubDomainWrapper>
                    {
                    subdomainRoutes.map(item => 
                        <NavList key={item.title}>
                            <Link to={item.route} >
                                {item.title}
                            </Link>
                        </NavList>)
                    }
                </SubDomainWrapper>
                <div className='scene-wrapper users-scene-wrapper'>
                    {/* default */}
                    <Route exact path={`${this.props.match.url}`} component={UsersDefault} /> 
                    {/* rendering subdomains */}
                    <Route path={`${this.props.match.url}/:subdomain`} component={UsersSubScreenWrapper} />
                </div>
            </div>
        );
    }
}

class UsersSubScreenWrapper extends React.Component {
    handleRenderUsersSubdomain = () => {
        const { url } = this.props.match;
        switch (url) {
            case '/users/a':
              return <UsersA />;
            case '/users/b':
                return <UsersB />
            default:
              return null;
          }
    }
    render(){
        return (
                this.handleRenderUsersSubdomain()
        )
    }
}

const SubDomainWrapper = styled.ul`
    display: flex;
    border: 1px solid #dadada;
`;
const NavList = styled.li`
    padding: 1rem;
`;

  export default Users;
