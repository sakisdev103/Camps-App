import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import CampList from './components/CampList';
import Error from './components/Error';
import AddCamp from './components/AddCamp';
import ViewCamp from './components/ViewCamp';
import Comment from './components/Comment';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/Camps-App' element={<Main/>}></Route>
        <Route path='/Camps-App/camplist' element={<CampList/>}></Route>
        <Route path='/Camps-App/add' element={<AddCamp/>}></Route>
        <Route path='/Camps-App/view/:id' element={<ViewCamp/>}></Route>
        <Route path='/Camps-App/comment/:id' element={<Comment/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App