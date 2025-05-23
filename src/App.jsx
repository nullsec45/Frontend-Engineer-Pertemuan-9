import { useState } from 'react'
import {Route,Routes} from 'react-router';
import {
  Create,
  NowPlaying,
  Popular,
  TopRated
} from './pages/movies';
import Layout from './Layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/create' element={<Create />}></Route>
        <Route path='/movie/popular' element={<Popular />}></Route>
        <Route path='/movie/now' element={<NowPlaying />}></Route>
        <Route path='/movie/top' element={<TopRated />}></Route>
      </Routes>
      </Layout>
    </>
  )
}

export default App
