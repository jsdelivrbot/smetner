import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ListIndex from './components/list_index';
import ListAdd from './components/list_edit';
import ListEdit from './components/list_edit';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ListIndex} />
        <Route path="list/add" component={ListAdd} />
        <Route path="list/edit/:id" component={ListEdit} />
    </Route>
);