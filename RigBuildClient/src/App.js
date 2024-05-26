import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'


import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
import Welcome from './component-one/Welcome/Welcome'
import ContactUs from './component-one/ContactUS/Contact/ContactUs'
import Home from './component-one/Cart/Home'
import Custompcbuild from './pages/Custompcbuild'
import InvoiceForm from './component-one/Invoice generator/components/InvoiceForm'  
import Invoices from './component-one/Invoice generator/Invoice'
import Login from './component-one/Login/Login'
import PreBuilt from './pages/Prebuilt'
import LoginPage from './component-one/AdminLogin/AdminComp/LoginPage/LoginPage'
import Recommandation from './pages/Recommandation'
import Gears from './pages/Gears'
import Buy from './pages/Buy'
import Custombutpay from './pages/Custombuypay'
import Table from './component-one/OrderTable/Customordertable'
import Gearsorder from './component-one/OrderTable/Gearsorder'
import PrerecOrders from './pages/RecPreorders'
import Lettalk from './pages/letstalk'
import Talk from './pages/talk'
import Query from './pages/Query'
import CREDop from './pages/CRED'
import CredTable from './pages/credtable'
import Order from './pages/order'
import CustomOrderTable from './pages/PreRecOrderTable'


function App() {
  return (
    <div>
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Welcome}/>
            <Route path='/Adminpage' exact component={Layout}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/Contactus' component={ContactUs}/>
            <Route path='./list' component={Home}/>
            <Route path='/Custompcbuild' component={Custompcbuild}/>
            <Route path='./Invoice' exact component={InvoiceForm}/>
            <Route path='/Prebuilt' component={PreBuilt}/>
            <Route path='/Admlog' component={LoginPage}/>
            <Route path='/Gears' component={Gears}/>
            <Route path='/recommand' component={Recommandation}/>
            <Route path='/bill' component={Invoices}/>
            <Route path='/buy' component={Buy}/>
            <Route path='/custompay' component={Custombutpay}/>
            <Route path='/table' component={Table}/>
            <Route path='/gearorder' component={Gearsorder}/>
            <Route path='/prerec' component={PrerecOrders}/>
            <Route path='/talk' component={Lettalk}/>
            <Route path='/lettalk' component={Talk}/>
            <Route path='/query' component={Query}/>
            <Route path='/credop' component={CREDop}/>
            <Route path='/credtable' component={CredTable}/>
            <Route path='/order' component={Order}/>
            <Route path='/customordertable' component={CustomOrderTable}/>
            
        </Switch>
        
        </BrowserRouter>
    </div>
  )
}



export default App
