import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashBoard from '../components/ExpenseDashBoard'
import Header from '../components/Header'

const AppRouter = () => (
   <BrowserRouter>
        <div>
         <Header />
          <Switch>
             <Route path='/' component={ExpenseDashBoard} exact={true} />
             <Route path='/create' component={AddExpensePage} />
             <Route path='/edit/:id' component={EditExpensePage} />
             <Route path='/help' component={HelpPage} />
             <Route component={PageNotFound} />       
         </Switch>  
        </div>
    </BrowserRouter>
)

export default AppRouter
