import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { InputPage, NotFound, Repos, Details } from './pages';
import { Header } from './layout'
import "./index.css"

const App = () => {
    return(
    <>
        <Header />
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