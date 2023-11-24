import Layout from './Layout/Layout'
import Builder from './Builder/Builder'
import AboutUs from '../components/AboutUs/AboutUs'
// import Checkout from '../components/Checkout/Checkout'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AdminLogin from '../components/AdminLogin/AdminLogin.js'
import AdminPage from '../components/AdminPage/AdminPage'
import DisplayOrder from '../components/DisplayOrder/DisplayOrder'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Route path="/" exact component={Builder}/>
          <Route path="/aboutus" exact component={AboutUs}/>
          <Route path="/adminlogin" exact component={AdminPage}/>
          
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
