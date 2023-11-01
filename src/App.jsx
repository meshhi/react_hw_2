import './App.css'
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <nav className='navigation__container'>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/store">Store</Link>
    </nav>
    <main className='main__container'>
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="store" element={<Store />} />
      </Routes>
    </main>
    </>
  )
}

export default App
