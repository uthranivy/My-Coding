import React, {Component} from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/home'
import Dashboard from './components/admin/dashboard'
import Products from './components/products'
import Posts from './components/posts'
import ProductDetails from './components/productDetails'
import NotFound from './components/notfound'
import './App.css';


// old one "switch" and new one is **Routes**

class App extends Component {

  render(){
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar />  
          <main className="px-3"> 
            <Routes>
              {/* <Route render={() => <Products sortBy="newest" />} /> */}
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products" element={<Products sortBy="newest" {...this.props} />} />
                       {/* ? for not render home page */}
              <Route path="/posts/:year?/:month?" element={<Posts />} />
              <Route path="/admin/*" element={<Dashboard />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/" element={<Home />} /> 
              <Route path="*" element={<Navigate to="/notfound" />} /> {/* Redirect to NotFound */}
            </Routes> 
          </main>

          <footer className="mt-auto text-white-50">
            <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
          </footer>
      </div>
    );
  } 
}

export default App;
