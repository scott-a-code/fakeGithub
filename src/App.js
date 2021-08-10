import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { InputPage, NotFound, Repos } from './pages';

const App = () => {
    return(
    <>
        {/* <Header /> */}
            <div className="content">
                <Switch>
                    <Route exact path='/'>
                        <InputPage />
                    </Route>
                    <Route path='/repos'>
                        <Repos />
                    </Route>
                    {/* <Route path='/repos/:id'>
                        <Details />
                    </Route> */}
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        {/* <Footer /> */}
    </>
    )};

export default App;