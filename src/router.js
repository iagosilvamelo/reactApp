import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main     from './views/Main';
import Products from './views/Products';
import Product  from './views/Product';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/Produtos" component={Products} />
			<Route exact path="/Produtos/:id" component={Product} />
		</Switch>
	</BrowserRouter>
);

export default Routes;