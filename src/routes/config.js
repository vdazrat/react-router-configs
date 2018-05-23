import App from '../App';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import Sibling from './Sibling';


/*
    Will return a similarly rendered tree
*/
/*********************************************

<App>
    <Route path="/parent" render={(props) => {
        return (
            <ParentComponent {...props}>
                <Route exact path="/parent/:groupId" render={
                    (props) => <ChildComponent {...props}/>
                }/>
            </ParentComponent>
        );
    .... other sibling routes
    }}/>
</App>

**********************************************/


const routeConfigs = {
    redirects: [
        {
            path: '/',
            to: '/parent',
            exact: true,
        },
        {
            path: '/something',
            to: '/sibling',
            exact: true,
        },
    ],
    component: App,
    routes: [
        {
            path: '/parent',
            exact: false,
            component: ParentComponent,
            routes: [
                {
                    path: '/parent/:groupId',
                    exact: true,
                    component: ChildComponent,
                }
            ]
        },
        {
            path: '/sibling',
            exact: true,
            component: Sibling,
        }
        
    ],
};

export default routeConfigs;