import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routeConfigs from './config';


const redirectRoutes = (redirects) => {
    return redirects.map(({ exact, path, to }, i) => (
        <Route exact={exact} path={path} key={`redirect__route__${i}`} render={() => (
            <Redirect to={to} />
            )}
        />
    ));
};


const renderRoutes = (config, props) => {
    return config ? (
        <config.component {...props}>
           {config.routes ? config.routes.map((route, i) => {
                return(
                    <Route 
                      key={route.key || i}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => {
                        return renderRoutes(route, props);
                      }}
                    />
                );
            }) : null}
        </config.component>
    ) : null;
};


const render = (routeConfig) => {
    if (routeConfig.redirects.length > 0) {
        return [
            redirectRoutes(routeConfig.redirects),
            renderRoutes(routeConfig, { key: 'parent__route__key'}),
        ];
    }
    return renderRoutes(routeConfig, null);
}


export default render(routeConfigs);