import React from 'react';
import { AppRouters } from './routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const PrincipalPoke = () => {
    return(
        <Provider store={store}>
            <AppRouters />
        </Provider>
    );
};
