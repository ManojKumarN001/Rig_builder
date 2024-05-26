import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Custompcbuild from '../pages/Custompcbuild'
import InvoiceForm from '../component-one/Invoice generator/components/InvoiceForm'
import PreBuilt from '../pages/Prebuilt'
import Gears from '../pages/Gears'
import Recommandation from '../pages/Recommandation'
import LoginPage from '../component-one/AdminLogin/AdminComp/LoginPage/LoginPage'
import Invoices from '../component-one/Invoice generator/Invoice'
import Buy from '../pages/Buy'
import Custombutpay from '../pages/Custombuypay'
import Table from '../component-one/OrderTable/Customordertable'
import Gearsorder from '../component-one/OrderTable/Gearsorder'
import PrerecOrders from '../pages/RecPreorders'
import Talk from '../pages/talk'
import Query from '../pages/Query'
import CREDop from '../pages/CRED'
import CredTable from '../pages/credtable'
import Order from '../pages/order'
import CustomOrderTable from '../pages/CustombuildGearordertable'


const Routes = () => {
    return (
        <Switch>
            <Route path='/Adminpage' exact component={Dashboard}/>
            <Route path='/Customers' component={Customers}/>
            <Route path='/CustomPCbuild' exact component={Custompcbuild}/>
            <Route path='./Invoice' exact component={InvoiceForm}/>
            <Route path='/Prebuilt' exact component={PreBuilt}/>
            <Route path='/Gears' exact component={Gears}/>
            <Route path='/recommand' exact component={Recommandation}/>
            <Route path='/Admlog' exact component={LoginPage}/>
            <Route path='/bill' component={Invoices}/>
            <Route path='/buy' component={Buy}/>
            <Route path='/custompay' component={Custombutpay}/>
            <Route path='/table' component={Table}/>
            <Route path='/gearorder' component={Gearsorder}/>
            <Route path='/prerec' component={PrerecOrders}/>
            <Route path='/lettalk' component={Talk}/>
            <Route path='/query' component={Query}/>
            <Route path='/credop' component={CREDop}/>
            <Route path='/credtable' component={CredTable}/>
            <Route path='/order' component={Order}/>
            <Route path='/customordertable' component={CustomOrderTable}/>
        </Switch>
    )
}

export default Routes
