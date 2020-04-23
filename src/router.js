import React from 'react';
import App from './App'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Admin from './admin'
import Login from './pages/login'
import Button from './pages/ui/button'
import Logins from './pages/form/login'
import Reg from './pages/form/reg'
const Routers = () => {
    return ( 
         <Router>
             <App>
                 <Route path='/admin' render={
                     ()=><Admin>
                         <Route path='/admin/ui/buttons' component={Button}/>
                         <Route path='/admin/form/login' component={Logins}/>
                         <Route path='/admin/form/reg' component={Reg}/>
                         
                     </Admin>
                 }
                 />
                 <Route path='/login' component={Login}/>          
             </App>
         </Router>
     );
}
 
export default Routers;