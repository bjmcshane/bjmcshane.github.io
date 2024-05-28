import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Supernova from './components/Supernova'
import Stocks from './components/Stocks'
import GaussianProcess from './components/GP'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='supernova' element={<Supernova />}/>
        <Route path='stocks' element={<Stocks />}/>
        <Route path='gaussian' element={<GaussianProcess />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
