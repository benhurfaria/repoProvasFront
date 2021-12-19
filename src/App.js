import GlobalStyle from './assets/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from './components/pages/Home';
import Send from './components/pages/Send';
import Teacher from './components/pages/Teacher';
import Curso from './components/pages/Curso';
import Nome from './components/pages/Nome';
import { ProfessorContext } from './components/Context/ProfessorContext';
import { CursoContext } from './components/Context/CursoContext';

export default function App() {
  const [professor, setProfessor] = useState('');
  const [curso, setCurso] = useState('');
  return (
    <ProfessorContext.Provider value={{professor, setProfessor}}>
      <CursoContext.Provider value={{curso, setCurso}}>
        <BrowserRouter>
          <GlobalStyle/>
          <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route exact path="/send" element={<Send/>}/>
            <Route exact path="/teacher" element={<Teacher/>}/>
            <Route exact path="/materia" element={<Curso/>}/>
            <Route exact path="/nome" element={<Nome/>}/>
          </Routes>
        </BrowserRouter>
      </CursoContext.Provider>
    </ProfessorContext.Provider>
  );
}


