import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { InputPage, NotFound, Repos, Details } from './pages';

const App = () => {
    return(
    <>
        {/* <Header /> */}
            <div className="content">
                <Switch>
                    <Route exact path='/'>
                        <InputPage />
                    </Route>
                    <Route exact path='/repos/:userName'>
                        <Repos />
                    </Route>
                    <Route path='/repos/:userName/:repoName'>
                        <Details />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        {/* <Footer /> */}
    </>
    )};

export default App;