import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Auth from './components/Auth';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route without Header and Footer */}

        {/* Routes with Header and Footer */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <Footer />
            </div>
          }/>
          <Route path='/Login' element={<Login />} />
        {/* <Route
          path="/About"
          element={
            <div>
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div>
              <Header />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Menu"
          element={
            <div>
              <Header />
              <Menu />
              <Footer />
            </div>
          }
        /> */}
        <Route
          path="/Auth"
          element={
            <div>
              <Auth />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;