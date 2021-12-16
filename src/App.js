import GlobalStyle from './assets/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Send from './components/pages/Send';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/send" element={<Send/>}/>
        <Route exact path="/view" element={<Send/>}/>
      </Routes>
    </BrowserRouter>
  );
}


