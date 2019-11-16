import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Component/Header';
import Welcome from './Component/Home/Welcome';
import Admin from './Component/Home/Admin';
import Trainer from './Component/Home/Trainer';
import Faq from './Component/Home/Faq';
import Contact from './Component/Home/Contact';

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/trainer" component={Trainer}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Map" component={Map}/>
                   </BrowserRouter>
            
            </div>
           
        )
    }

}




ReactDOM.render(<App />, document.getElementById('root'));

