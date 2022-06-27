import Layout from './Layout/Layout'
import Builder from './Builder/Builder'
import AboutUs from '../components/AboutUs/AboutUs'
import Checkout from '../components/Checkout/Checkout'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Layout>
        <Route path="/" exact component={Builder}/>
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/checkout" exact component={Checkout}/>
      </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
