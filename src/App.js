import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home'
import NewsDetail from './NewsDetail';
import Footer from './Footer'
import Navbar from './Navbar'
import NotFound from './NotFound'; 
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
  <Navbar />
  <Router>
  <div className="App">
  <Routes>
  <Route  exact path="/" element={<Home />} />
  <Route path="/NewsDetail/:id" element={<NewsDetail/>} />
  <Route   path="*" element={<NotFound />} />
  

</Routes>
</div>
</Router>
<Footer />
</div>

  );
}

export default App;
